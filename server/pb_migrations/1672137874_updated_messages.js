migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dco5wnm6hnpn4a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q9npeocb",
    "name": "reactions_id",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "collectionId": "nvel17yihlvhciu",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dco5wnm6hnpn4a")

  // remove
  collection.schema.removeField("q9npeocb")

  return dao.saveCollection(collection)
})
