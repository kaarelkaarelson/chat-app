migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4o5v7h8mtmvvfpg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4o5v7h8mtmvvfpg",
    "created": "2022-12-29 06:06:03.202Z",
    "updated": "2022-12-29 06:06:03.202Z",
    "name": "messages2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nofz2eut",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ugxziq25",
        "name": "status",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
