migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oje0ljd10hirs1z");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "oje0ljd10hirs1z",
    "created": "2022-12-30 08:28:49.420Z",
    "updated": "2022-12-30 08:28:49.420Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oog1crxb",
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
        "id": "pdkruhmp",
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
        "id": "0nbypdmv",
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
        "id": "4suiaboa",
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
        "id": "xnzdl3q5",
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
