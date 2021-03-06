const mongoose = require('mongoose');

//Item schema to be used with mongoose for MongoDB
const itemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    likes: {
        type: [String]
    }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
