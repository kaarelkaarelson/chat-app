migrate((db) => {
  const collection = new Collection({
    "id": "nvel17yihlvhciu",
    "created": "2022-12-27 10:18:46.174Z",
    "updated": "2022-12-27 10:18:46.174Z",
    "name": "reactions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gz465wuh",
        "name": "like",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2xu2p67t",
        "name": "wow",
        "type": "number",
        "required": true,
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
        "required": true,
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
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "skqotko2",
        "name": "message_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "9dco5wnm6hnpn4a",
          "cascadeDelete": true
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu");

  return dao.deleteCollection(collection);
})
