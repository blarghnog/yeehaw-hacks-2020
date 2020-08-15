const express = require('express');
const path = require('path');
const fetch = require('node-fetch')
const cors = require('cors');

const app = express();

// const corsCheck = (origin, callback) => {
//     if(origin == "")
// }

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/cowboyQuery', (req,res) => {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=cowboy&key=AIzaSyC-fF99utKCe73JZDl653ZjbI8kFqvfHzc`)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log(error))
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
