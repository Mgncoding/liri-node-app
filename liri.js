 require("dotenv").config();
//  Packages and Api
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const moment = require("moment");

// to append txt files
const fs = require("fs");
var query = process.argv[3];

// Check Keys
// console.log(keys)
var option = process.argv[2];
//  Spotify client
const spotify = new Spotify(keys.spotify);

switch (option) {
    case "movie-this":
       movieThis(query);
       break;
    case "spotify-this-song":
       spotifyCall(query);
       break;
    case "concert-this":
       concertThis(query);
       break;
    default:
        // read file
        fs.readFile("random.txt", "UTF8", function(error, data){
            var data = data.split(",");
            var wantIt = data[1];
            if (error) {
                return console.log(error)
            }
            // Now we call the function
            spotifyCall(wantIt);
        }) 
}
// Function and Spotify-This-Song
function spotifyCall(songName) {
    spotify.search({type: 'track',query:songName}, function(err, data) {
        if (err) {
            return console.log('Error occurred' + err);
        }
        console.log("\n Track Info " + "\nArtist: " + data.tracks.items[0].artists[0].name + "\n Song: " + data.tracks.items[0].name + "\n Link: " + data.tracks.items[0].external_urls.spotify + "\n Album: " + data.tracks.items[0].album.name + "\n" + "\n This song is great, But how about another!")
    })
}