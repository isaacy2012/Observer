const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// get all items from db.
router.post('/', function (req, res) {
    const {id} = req.body;
    Item.find({room: id})
        .then(result => { res.send(result) })
        .catch(() => res.end());
});

module.exports = router;