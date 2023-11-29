const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');

// Route to get a list of movies from a specified provider
router.get('/movies', async (req, res) => {
    // Extract provider from the base URL
    const provider = req.baseUrl.split('/')[2];
    try {
        // Retrieve available movies using the movie service
        const movies = await movieService.getAvailableMovies(provider);
        // Send the movies as a JSON response
        res.json(movies);
    } catch (error) {
        // Send a 500 Internal Server Error response in case of any failure
        res.status(500).json({ error: error.message });
    }
});

// Route to get details of a specific movie by ID
router.get('/movie/:id', async (req, res) => {
    // Extract movie ID from request parameters
    const { id } = req.params;
    // Extract provider from the base URL
    const provider = req.baseUrl.split('/')[2];
    try {
        // Retrieve movie details using the movie service
        const movieDetails = await movieService.getMovieDetails(id, provider);
        // Send the movie details as a JSON response
        res.json(movieDetails);
    } catch (error) {
        // Send a 500 Internal Server Error response in case of any failure
        res.status(500).json({ error: error.message });
    }
});

// Export the router for use in the main application
module.exports = router;
