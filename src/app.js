import express from 'express';
import morgan from 'morgan';


// Routes.

// Set web server.

const app = express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);
app.set("json spaces", 4);


// Middlewares.

app.use(morgan('dev'));

// Routes.


app.listen(PORT);

export default app;