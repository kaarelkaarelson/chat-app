import PocketBase from 'pocketbase';
import {
  allowFetch,
  endLoading,
  getMessagesIsLoading,
  prohibitFetch,
  startLoading,
} from '../redux/slices/messagesSlice';
import store from '../redux/store';

const client = new PocketBase('http://127.0.0.1:8090');

store.dispatch(prohibitFetch());

await client.admins.authWithPassword('admin@gmail.com', '1234567890'); // <- Enter your pocketbase credentials here.

let usersCollection = null;
let messagesCollection = null;

try {
  usersCollection = await client.collections.getOne('users'); // Assuming account has default pocketbase table 'users'
} catch (err) {
  console.log('Error', err);
}

try {
  messagesCollection = await client.collections.getOne('messages_table'); // Assuming account has default pocketbase table 'users'
} catch (err) {
  console.log('Error', err);
}

console.log(usersCollection);
console.log(messagesCollection);

if (usersCollection && !messagesCollection) {
  console.log('if doesn`t exist create messages_table');

  const MessagesCollection = await client.collections.create({
    name: 'messages_table',
    type: 'base',
    schema: [
      {
        name: 'message',
        type: 'text',
        required: true,
        options: {
          min: 0,
          max: 150,
        },
      },
      {
        name: 'user_id',
        type: 'relation',
        required: true,
        options: {
          collectionId: usersCollection.id,
        },
      },
      {
        name: 'like',
        type: 'number',
        options: {
          min: 0,
        },
      },
      {
        name: 'wow',
        type: 'number',
        options: {
          min: 0,
        },
      },
      {
        name: 'heart',
        type: 'number',
        options: {
          min: 0,
        },
      },
    ],
    listRule: '',
    viewRule: '',
    createRule: 'user_id = @request.auth.id',
  });

  const user1 = await client.collection('users').create({
    username: 'Brad',
    password: 'brad1234',
    passwordConfirm: 'brad1234',
  });

  const user2 = await client.collection('users').create({
    username: 'Zed',
    password: 'zed12345',
    passwordConfirm: 'zed12345',
  });

  const user3 = await client.collection('users').create({
    username: 'Reti',
    password: 'reti1234',
    passwordConfirm: 'reti1234',
  });

  const message1 = await client
    .collection('messages_table')
    .create({ message: 'Hello!', user_id: user1.id });

  const message2 = await client
    .collection('messages_table')
    .create({ message: 'Hello bro!', user_id: user2.id });

  const message3 = await client
    .collection('messages_table')
    .create({ message: 'Howdy !', user_id: user3.id });

  console.log('user1', user1);

  console.log('Messages table created');
}

// Removing admin token from local storage
client.authStore.clear();

store.dispatch(allowFetch());

export default client;
