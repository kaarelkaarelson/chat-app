migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dco5wnm6hnpn4a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wm0o8nhi",
    "name": "like",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hokouv2w",
    "name": "heart",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szrl4kuw",
    "name": "wow",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9dco5wnm6hnpn4a")

  // remove
  collection.schema.removeField("wm0o8nhi")

  // remove
  collection.schema.removeField("hokouv2w")

  // remove
  collection.schema.removeField("szrl4kuw")

  return dao.saveCollection(collection)
})
