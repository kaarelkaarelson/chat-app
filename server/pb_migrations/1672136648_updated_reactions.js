migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skqotko2",
    "name": "message_id",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "collectionId": "9dco5wnm6hnpn4a",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skqotko2",
    "name": "message_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "9dco5wnm6hnpn4a",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
