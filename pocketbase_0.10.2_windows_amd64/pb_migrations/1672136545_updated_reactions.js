migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2xu2p67t",
    "name": "wow",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvapzj7m",
    "name": "heart",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0chh2zkj",
    "name": "rocket",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvel17yihlvhciu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2xu2p67t",
    "name": "wow",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvapzj7m",
    "name": "heart",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0chh2zkj",
    "name": "rocket",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "skqotko2",
    "name": "message_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "9dco5wnm6hnpn4a",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
