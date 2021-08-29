const express = require('express');
const router = express.Router();
const Item = require('../models/item')

// get all items from db.
router.get('/', function(req, res) {
    Item.find().then(result => {res.send(result)});
});

module.exports = router;