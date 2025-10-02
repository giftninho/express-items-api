# Express Items API

## Quick Start

1. Run `npm install`
2. Start server: `npm start`
3. Visit: [http://localhost:3000/](http://localhost:3000/)

## Endpoints

* GET `/` → Welcome message
* GET `/items` → List all items
* GET `/items/:id` → Get single item
* POST `/items` → Create new item
* PUT `/items/:id` → Update item
* DELETE `/items/:id` → Delete item

## Validation

* **name**: required, minimum 3 characters
* **description**: required, minimum 10 characters

---

## API Testing with curl

You can test the API directly from your terminal using the following commands:

### 1. Get all items

```bash
curl -X GET http://localhost:3000/items
```

### 2. Get a single item by ID

```bash
curl -X GET http://localhost:3000/items/1
```

### 3. Create a new item

```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Black Marker","description":"A thick black permanent marker for writing on surfaces."}'
```

### 4. Update an item

```bash
curl -X PUT http://localhost:3000/items/2 \
  -H "Content-Type: application/json" \
  -d '{"name":"Red Pen (Updated)","description":"Updated description for red pen"}'
```

### 5. Delete an item

```bash
curl -X DELETE http://localhost:3000/items/3
```

### 6. Validation Example (should fail)

```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Hi","description":"Too short"}'
```

Expected response:

```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "name", "message": "Name must be at least 3 characters" },
    { "field": "description", "message": "Description must be at least 10 characters" }
  ]
}
```

---

## API Testing with Postman

For easier testing, you can import the included Postman collection:

1. Open Postman.
2. Click **Import** (top-left).
3. Select the file `ItemsAPI.postman_collection.json` from this project folder.
4. All routes (GET, POST, PUT, DELETE, validation) will be available in a ready-to-use collection.

This collection mirrors the `curl` examples above and includes:

* Get all items
* Get item by ID
* Create item
* Update item
* Delete item
* Validation error example
