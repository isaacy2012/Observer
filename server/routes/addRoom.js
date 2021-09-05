const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// add room to the db.
router.post('/', function (req, res) {
    const { name, creator } = req.body;
    const pin = Math.floor(Math.random() * (10000 - 1000) + 1000);
    const room = new Room({ name, creator, pin });
    room.save()
        .then( savedRoom => res.send(savedRoom))
        .catch( () => res.end());

});

module.exports = router;