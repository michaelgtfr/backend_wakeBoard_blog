const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    item: {type: mongoose.Types.ObjectId , ref: 'Comment', required: true},
    dateCreate: Date,
    comment: String,
    author: {type: mongoose.Schema.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Comment', commentSchema);
