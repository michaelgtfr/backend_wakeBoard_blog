const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
   item: { type: mongoose.Types.ObjectId, ref: 'Item'},
   link: { type: String, required: true},
});

module.exports = mongoose.model('movie', movieSchema);