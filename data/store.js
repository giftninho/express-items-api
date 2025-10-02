let nextId = 4;
const now = () => new Date().toISOString();

const items = [
  { id: 1, name: 'Blue Notebook', description: 'A blue ruled notebook for school and notes.', createdAt: now(), updatedAt: now() },
  { id: 2, name: 'Red Pen', description: 'A smooth red ink pen for annotations and journaling.', createdAt: now(), updatedAt: now() },
  { id: 3, name: 'Sketchbook', description: 'A large sketchbook with thick pages for drawings.', createdAt: now(), updatedAt: now() }
];

function getAll() { return items; }
function findById(id) { return items.find(i => i.id === id) || null; }
function create({ name, description }) {
  const item = { id: nextId++, name, description, createdAt: now(), updatedAt: now() };
  items.push(item); return item;
}
function update(id, { name, description }) {
  const item = findById(id); if (!item) return null;
  if (name) item.name = name; if (description) item.description = description;
  item.updatedAt = now(); return item;
}
function remove(id) {
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1); return true;
}

export default { getAll, findById, create, update, remove };