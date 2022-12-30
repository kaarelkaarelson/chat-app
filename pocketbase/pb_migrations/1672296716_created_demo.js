migrate((db) => {
  const collection = new Collection({
    "id": "c4r56vy9knax7wn",
    "created": "2022-12-29 06:51:56.984Z",
    "updated": "2022-12-29 06:51:56.984Z",
    "name": "demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xmygwnma",
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
        "id": "1zhkqmcy",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c4r56vy9knax7wn");

  return dao.deleteCollection(collection);
})
