migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ko22lyhpzerozhk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ko22lyhpzerozhk",
    "created": "2022-12-29 06:49:56.939Z",
    "updated": "2022-12-29 06:49:56.939Z",
    "name": "messages3",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ickic7uq",
        "name": "message",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 150,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
