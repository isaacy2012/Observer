const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// add room to db.
router.post('/', function (req, res) {
    const { name, pin, maker } = req.body;
    const room = new Room({name, pin, maker});
    room.save()
        .then( savedRoom => res.send(savedRoom))
        .catch( () => res.end());

});

module.exports = router;