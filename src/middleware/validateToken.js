// Middleware function to validate the access token in the request header
const validateToken = (req, res, next) => {
    // Extract the token from the request header
    const token = req.headers['x-access-token'];

    // Check if the token matches the expected API token from environment variables
    if (token !== process.env.API_TOKEN) {
        // If the token is invalid or missing, return a 403 Forbidden response
        return res.status(403).json({ error: 'Invalid or missing token' });
    }

    // If the token is valid, proceed to the next middleware/function in the stack
    next();
};

// Export the validateToken middleware for use in the main application
module.exports = validateToken;
