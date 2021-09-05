const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// add an Item to the db
router.post('/', function (req, res) {
    const { text, likes, room } = req.body;
    const item = new Item({ text, room, likes });
    item.save()
        .then( savedItem => res.send(savedItem))
        .catch( () => res.end());
});

module.exports = router;