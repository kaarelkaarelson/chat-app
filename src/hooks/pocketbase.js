import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const pbLogin = async (username, password) => {
  console.log('PUT init', username, password);

  // Returns JWT when user exists
  // try {
  const authData = await pb.collection('users').authWithPassword(username, password);

  console.log('done', authData);
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model.id);

  return authData;
  // } catch (error) { console.log(error);
  //   return null;
  // }
};

const pbLogout = () => {
  pb.authStore.clear();
  console.log('logged out, is token valid: ', pb.authStore.isValid);
};

const pbSignUp = async (username, password) => {
  try {
    await pb.collection('users').create({
      username,
      password,
      passwordConfirm: password,
    });
  } catch (error) {
    console.log(error);
  }
  console.log('new user signed up');
};

export { pb, pbLogin, pbLogout, pbSignUp };
