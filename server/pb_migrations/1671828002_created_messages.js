migrate(
  (db) => {
    const collection = new Collection({
      id: '9dco5wnm6hnpn4a',
      created: '2022-12-23 20:40:02.229Z',
      updated: '2022-12-23 20:40:02.229Z',
      name: 'messages',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'ywr7mnq7',
          name: 'message',
          type: 'text',
          required: true,
          unique: false,
          options: {
            min: 1,
            max: 150,
            pattern: '',
          },
        },
        {
          system: false,
          id: 'bcqbu7si',
          name: 'user_id',
          type: 'relation',
          required: true,
          unique: false,
          options: {
            maxSelect: 1,
            collectionId: '_pb_users_auth_',
            cascadeDelete: false,
          },
        },
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('9dco5wnm6hnpn4a');

    return dao.deleteCollection(collection);
  },
);
