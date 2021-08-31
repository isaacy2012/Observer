const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// add an Item to the db
router.post('/', function (req, res) {
    const { text, likes } = req.body;
    const item = new Item({ text, likes });
    item.save().then(savedItem => res.send(savedItem)).catch(err => res.end());
});

module.exports = router;