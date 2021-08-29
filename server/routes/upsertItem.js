const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// update an Item in db by Id
router.post('/', function(req, res) {
    const {text,likes,_id} = req.body;
    Item.findByIdAndUpdate(_id,{text,likes},{new: true,upsert: true})
        .then(() => res.send(true))
        .catch(() => res.send(false));
});

module.exports = router;