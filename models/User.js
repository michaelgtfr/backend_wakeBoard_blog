const mongoose = require('mongoose');

const Item = require('./Item');
const Comment = require('./Comment');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dateCreate: {type: Date, required: true },
    password: { type: String, required: true },
    confirmation: Number,
    picture: String,
    roles: JSON,
    presentation: String,
    items: [ Item.schema ],
    comments: [ Comment.schema],
    confirmationKey: String,
});

module.exports = mongoose.model('User', userSchema);