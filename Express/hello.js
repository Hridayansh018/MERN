// importing express module using require function
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/about', (req, res) => {
    res.send("Welcome to about page huehue");
})

app.get('/contact', (req, res) => {
    res.send("hridayansh018@gmail.com 9305871209");
})

app.get('/app', (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname + "/index.html");
})

app.listen(3000)