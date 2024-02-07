var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const TMDB_API_KEY = "f8461b3d7eda79ea260408b472a01ca7"

    router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => { res.json({movies : data.results})})
    });

module.exports = router;
