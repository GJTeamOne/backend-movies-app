const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Function to get available movies from a mock JSON file
const getAvailableMovies = async (provider) => {
    // Construct the path to the mock data file based on the provider
    const mockDataPath = path.join(__dirname, '..', `${provider}_mock.json`);
    // Read and parse the mock data file
    let movieData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));
    // Sort the movie data by price in ascending order
    movieData = movieData.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
    return movieData;
};

// Function to get detailed information about a specific movie using the OMDB API
const getMovieDetails = async (id) => {
    try {
        // Construct the URL for the OMDB API request with the movie ID and API key
        const url = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`;

        // Perform the GET request to the OMDB API
        const response = await axios.get(url);
        
        // Handle case where the OMDB API returns a response indicating failure
        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }

        // Return the movie details from the API response
        return response.data;
    } catch (error) {
        // Log and rethrow any errors encountered during the API request
        console.error(error.message);
        throw error;
    }
};

// Export the utility functions for use elsewhere in the backend
module.exports = {
    getAvailableMovies,
    getMovieDetails
};
