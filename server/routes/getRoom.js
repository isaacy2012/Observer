const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// get a room from db.
router.post('/', function (req, res) {
    const { pin } = req.body;
    Room.findOne({ pin: pin })
        .then( found => res.send(found))
        .catch( () => res.end());
});

module.exports = router;