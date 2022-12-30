migrate((db) => {
  const collection = new Collection({
    "id": "ga1s85ohrgkt9sv",
    "created": "2022-12-29 09:02:50.599Z",
    "updated": "2022-12-29 09:02:50.599Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v15rlvvt",
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
        "id": "lyoqyxes",
        "name": "user_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "hiqwqpyb",
        "name": "like",
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
        "id": "exwgfgba",
        "name": "wow",
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
        "id": "7lulh8us",
        "name": "heart",
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
    "createRule": "user_id = @request.auth.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ga1s85ohrgkt9sv");

  return dao.deleteCollection(collection);
})
