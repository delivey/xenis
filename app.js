const express = require('express') // Import for Express.js
const app = express();
const port = 5000; // The port the app will run on

var mongoose = require("mongoose");

require('dotenv').config();

// Mongose and MongoDB setup

var URI = process.env.MONGO_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

const Schema = mongoose.Schema;

var urlSchema = new Schema({
    original_url: { type: String, required: true },
    new_url : { type: String, required: true }
});

// GET routes

app.get('/', (req, res) => {
    var index_path = __dirname + '/templates/' + 'index.html'; // Path for index.html
    res.sendFile(index_path); // Sends the path
})

app.get('/sh', (req, res) => {
    var shortened_path = __dirname + '/templates/' + 'index.html'; // Path for shortened.html
    res.sendFile(shortened_path); // Sends the path
})

// POST routes

// Running the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })