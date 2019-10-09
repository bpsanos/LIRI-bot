//Set environment variables with the dotenv package
require("dotenv").config();

let axios = require("axios");
let Spotify = require('node-spotify-api');
let fs = require("fs");
let spotifyKeys = require('./keys.js');
let spotify = new Spotify(spotifyKeys.spotify);

const [node, file, ...args] = process.argv;


if (args[0] === "movie-this") {
    if (args[1] === undefined) {
        getMovie("Mr. +Nobody");
    }
    else {
        getMovie(args.slice(1).join("+"));
    }
};

if (args[0] === "spotify-this-song") {
    if (args[1] === undefined) {
        spotifySong("Bye Bye Bye");
    }
    else {
        let songTitle = args.slice(1).join(" ");
        spotifySong(songTitle);
    }
};

if (args[0] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        dataArr = data.split(",");
    }
}