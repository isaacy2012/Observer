const mongoose = require('mongoose');

//Room schema to be used with mongoose for MongoDB
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    maker: {
        type: String,
        required: true
    }
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
