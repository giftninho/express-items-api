import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

import itemsRouter from './routes/items';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to the Items API', version: '1.0.0' });
});

app.use('/items', itemsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Items API running at http://localhost:${PORT}`));

export default app;