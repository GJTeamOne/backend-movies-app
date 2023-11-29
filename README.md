# Movie Selection Platform (Backend)

## Project Overview

This project is the backend for a movie selection platform. It provides RESTful endpoints to fetch lists of movies and detailed information about each movie from an external API. The server is built with Node.js and Express, utilizing the OMDB API for movie data.

## Features

- **World Endpoints**: Serve movie lists from specified movie worlds.

- **Movie Details**: Provide detailed information about individual movies when requested by ID.

## Setup and Installation

### Clone the Repository

**Clone the backend project repository by running the following command**:
```bash
git clone [backend repository URL]
```

**Navigate to the project directory**:
```bash
cd [backend local repository]
```

### Install Dependencies

**Install all the required Node.js packages using npm**:
```bash
npm install
```

### Set Up Environment Variables

**Create a `.env` file in the root of the project and define the following variables**:
```bash
API_TOKEN=[your API token for client authentication]
```
```bash
OMDB_API_KEY=[your OMDB API key]
```

Replace [your API token for client authentication] with your token for securing the endpoints and [your OMDB API key] with the key provided by OMDB.

### Start the Server

**Start the backend server with**:
```bash
npm start
```
```bash
The server will start on `http://localhost:3000`.
```

## API Endpoints

**The server provides the following endpoints**:
```bash
GET /api/filmworld/movies - Retrieves a list of movies.
```
```bash
GET /api/cinemaworld/movies - Retrieves a list of movies.
```
```bash
GET /api/filmworld/movie/{id} - Retrieves details of a specific movie.
```
```bash
GET /api/cinemaworld/movie/{id} - Retrieves details of a specific movie.
```

## Notes

- The API_TOKEN is used to authenticate requests to your backend server. This should be kept secret and not exposed to the public.

- The OMDB_API_KEY is required to request movie data from the OMDB API. This key should also be kept confidential.
