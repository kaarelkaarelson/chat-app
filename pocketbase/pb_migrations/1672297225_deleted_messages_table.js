migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("egdnpx17f9gu6v7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "egdnpx17f9gu6v7",
    "created": "2022-12-29 06:56:21.789Z",
    "updated": "2022-12-29 06:56:21.789Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ccp65ugk",
        "name": "message",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xpqqs6h2",
        "name": "user_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "user_id = @request.auth.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
