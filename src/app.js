const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movies');
const validateToken = require('./middleware/validateToken');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
    origin: 'http://127.0.0.1:5173' // Adjust this to match the domain of your front-end app
}));

// JSON parser for POST requests
app.use(express.json());

// Apply your token validation middleware to the routes
app.use('/api/cinemaworld', validateToken, movieRoutes);
app.use('/api/filmworld', validateToken, movieRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
