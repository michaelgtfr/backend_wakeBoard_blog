const mongoose = require('mongoose');

const Picture = require('./Picture');
const Movie = require('./Movie');
const Comment = require('./Comment');

const itemSchema = mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true, unique: true},
    chapo: String,
    content: String,
    dateCreate: Date,
    pictures: [ Picture.schema ],
    movies:  [ Movie.schema ],
    comments:  [ Comment.schema ]
});

module.exports = mongoose.model('Item', itemSchema);