// File3: app3.js

// Import required modules
import express, { json } from 'express';
const app = express();
const port = 3000;

// Require the data from data.js
import jsonData from './Data/personalprofile.json' assert { type: 'json' };
let data = jsonData;

// Express routes for CRUD operations
app.post('/create', (req, res) => {
    // Logic to create a new item
    const newItem = { id: data.length + 1, name: 'Adedoyin', age: 25, city: 'New City' };
    data.push(newItem);
    res.send('Item created successfully');
});

app.put('/update/:id', (req, res) => {
    // Logic to update an item by ID
    const id = req.params.id;
    const updatedItem = { id: parseInt(id), name: 'Updated Name', age: 30, city: 'Updated City' };
    data = data.map(item => (item.id === parseInt(id) ? updatedItem : item));
    res.send('Item updated successfully');
});

app.delete('/delete/:id', (req, res) => {
    // Logic to delete an item by ID
    const id = req.params.id;
    data = data.filter(item => item.id? item.id !== parseInt(id): false);
    res.send('Item deleted successfully');
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});