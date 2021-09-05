const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// update an Item in db by Id
router.post('/', function (req, res) {
    const { text, likes, id } = req.body;
    Item.findByIdAndUpdate(id, {text: text, likes: likes }, { new: true })
        .then(item => res.send(item))
        .catch(() => res.end());
});

module.exports = router;