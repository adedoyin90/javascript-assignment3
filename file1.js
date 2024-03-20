// File1: app.js

import express from 'express';

// Create an Express application
const app = express();
const port = 3000;

// Define route to display group names
app.get('/', (req, res) => {
    const groupNames = ['Group A', 'Group B', 'Group C'];
    let htmlContent = '<h1>Group Names:</h1><ul>';
    groupNames.forEach(name => {
        htmlContent += `<li>${name}</li>`;
    });
    htmlContent += '</ul>';
    res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});