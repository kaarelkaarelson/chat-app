migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ogvlu735x4i0azg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ogvlu735x4i0azg",
    "created": "2022-12-29 07:04:51.286Z",
    "updated": "2022-12-29 07:04:51.286Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iiyghckm",
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
        "id": "49x9r6i0",
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
        "id": "s9a018m9",
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
        "id": "calt3mjm",
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
        "id": "xdi2ir8u",
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
    "listRule": null,
    "viewRule": null,
    "createRule": "user_id = @request.auth.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
