const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');
const Item = require('./models/Item');
const Picture = require('./models/Picture');
const Movie = require('./models/Movie');
const Comment = require('./models/Comment');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.dnydz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/', (req, res) => {
    Item.find()
        .then( items => res.status(200).json( items ))
        .catch(error => res.status(400).json({ error }) );
});

app.get('/detail/:id', (req, res) => {
    Item.findOne({ _id: get.params.id })
        .then( item => res.status(200).json( item ))
        .then( error => res.status(404).json({ error }))
});

module.exports = app;
