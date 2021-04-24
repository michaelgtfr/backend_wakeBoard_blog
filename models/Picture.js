const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
    item: { type: mongoose.Types.ObjectId, required: true},
    name: { type: String, required: true },
    extension: {type: String, required: true },
    description: String,
});

module.exports = mongoose.model('Picture', pictureSchema);

