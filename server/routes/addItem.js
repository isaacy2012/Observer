const express = require('express');
const router = express.Router();
const Item = require('../models/item')

/* get all items from db. */
router.get('/', function(req, res) {
    const itemText = req.body;
    const item = new Item({
        text:"yeet"
    });
    item.save().then(savedItem => res.send(savedItem)).catch(err => res.send(err))
});

module.exports = router;