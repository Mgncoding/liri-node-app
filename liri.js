require("dotenv").config()

// Making requires
const keys = require("./keys.js")

const request = require("request")

const fs = require("fs")

const moment = require("moment")

const omdb = (keys.omdb)
const bandsintown = (keys.bandsintown)

const Spotify = require('node-spotify-api')
const spotify = new Spotify(keys.spotify)

// Arguments 


