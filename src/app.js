import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


// Routes.

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/products.routes.js';

// Set web server.

const app = express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);
app.set("json spaces", 4);


// Middlewares.

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes.

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT);

export default app;