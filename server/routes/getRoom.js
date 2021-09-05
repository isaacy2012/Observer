const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// get room from db.
router.get('/', function (req, res) {
    const {pin} = req.body;
    Room.find({pin: pin})
        .then( found => res.send(found))
        .catch( () => res.end());
});

module.exports = router;