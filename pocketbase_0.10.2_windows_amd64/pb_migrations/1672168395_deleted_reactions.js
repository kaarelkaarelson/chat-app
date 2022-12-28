migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nvel17yihlvhciu",
    "created": "2022-12-27 10:18:46.174Z",
    "updated": "2022-12-27 10:44:49.940Z",
    "name": "reactions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gz465wuh",
        "name": "like",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2xu2p67t",
        "name": "wow",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yvapzj7m",
        "name": "heart",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "0chh2zkj",
        "name": "rocket",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
