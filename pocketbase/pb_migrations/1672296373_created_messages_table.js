migrate((db) => {
  const collection = new Collection({
    "id": "9gztm4d38867lbi",
    "created": "2022-12-29 06:46:13.760Z",
    "updated": "2022-12-29 06:46:13.760Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jd4bbgv4",
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
        "id": "z7ym3su2",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9gztm4d38867lbi");

  return dao.deleteCollection(collection);
})
