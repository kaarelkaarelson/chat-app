migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz465wuh",
    "name": "like",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz465wuh",
    "name": "like",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
