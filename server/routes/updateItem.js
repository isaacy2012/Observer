const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// update an Item in db by Id
router.post('/', function(req, res) {
    const {text,likes,_id} = req.body;
    const item = new Item({text,likes});
    Item.findByIdAndUpdate(_id,item)
        .then(() => res.send(true))
        .catch(() => res.send(false));
});

module.exports = router;