migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bzlbcjq3axhl5jk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bzlbcjq3axhl5jk",
    "created": "2022-12-29 07:35:36.367Z",
    "updated": "2022-12-29 07:35:36.367Z",
    "name": "messages_table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1t5gu8ax",
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
        "id": "5xrgythb",
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
        "id": "abynfzg0",
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
        "id": "ca0zwkgs",
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
        "id": "jojf2t9n",
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
