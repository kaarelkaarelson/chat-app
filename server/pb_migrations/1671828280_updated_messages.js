migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('9dco5wnm6hnpn4a');

    collection.listRule = '';
    collection.viewRule = '';
    collection.createRule = 'user_id = @request.auth.id';

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('9dco5wnm6hnpn4a');

    collection.listRule = null;
    collection.viewRule = null;
    collection.createRule = null;

    return dao.saveCollection(collection);
  },
);
