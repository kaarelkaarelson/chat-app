migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c7d80oieztnc79o");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "c7d80oieztnc79o",
    "created": "2022-12-29 08:48:53.989Z",
    "updated": "2022-12-29 08:48:53.989Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "plibzmb4",
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
        "id": "qgip4frv",
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
        "id": "zdz6olme",
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
        "id": "r3uhoyef",
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
        "id": "xalv5u5w",
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
})
