// app.js (CommonJS)
const express = require('express');
const morgan = require('morgan');

const itemsRouter = require('./routes/items'); // CommonJS style, no .js extension needed
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to the Items API', version: '1.0.0' });
});

app.use('/items', itemsRouter);

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Items API listening at http://localhost:${PORT}`);
});
