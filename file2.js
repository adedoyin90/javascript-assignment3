// File2: app2.js
import express from 'express'
import fs from 'fs'

// Create an Express application
const app = express();
const port = 3000;

// Read JSON data from a file
const jsonData = JSON.parse(fs.readFileSync('./data/personalprofile.json', 'utf8'));

// Define route to display JSON contents
app.get('/personalprofile', (req, res) => {
    res.json(jsonData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/personalprofile`);
});