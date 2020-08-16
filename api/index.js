const apiKey = require('./apiKey');
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/cowboyQuery', (req, res) => {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=cowboy&key=${apiKey.apiKey}`)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log(error))
});

app.get('/api/placeQuery', (req, res) => {

    let location = {
        lng: "",
        lat: ""
    }
    req.query.city = req.query.city.split(' ').join('+');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.city},+${req.query.state}&key=${apiKey.apiKey}`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(item => {
            location=item.geometry.location;
        })
    })
    .then(() => fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=cowboy&location=${location.lat},${location.lng}&radius=${req.query.radius}&key=${apiKey.apiKey}`)
        .then(response => response.json())
        .then(data => {res.send(data)})
        .catch(error => console.log(error))
    )
    .catch(error => console.log(error))
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);