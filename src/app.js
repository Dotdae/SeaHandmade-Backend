import express from 'express';
import morgan from 'morgan';


// Routes.

import authRoutes from './routes/auth.routes.js';

// Set web server.

const app = express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);
app.set("json spaces", 4);


// Middlewares.

app.use(morgan('dev'));
app.use(express.json());

// Routes.

app.use('/api/auth', authRoutes);

app.listen(PORT);

export default app;