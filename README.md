# Express Items API

## Quick Start
1. Run `npm install`
2. Start server: `npm start`
3. Visit: http://localhost:3000/

## Endpoints
- GET `/` → Welcome message
- GET `/items` → List all items
- GET `/items/:id` → Get single item
- POST `/items` → Create new item
- PUT `/items/:id` → Update item
- DELETE `/items/:id` → Delete item

## Validation
- name: required, min 3 chars
- description: required, min 10 chars