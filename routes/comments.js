const express = require('express');

const router = express.Router();

const controller = require('../controllers/comments')

//GET comments
//show all comments
router.get('/comments', controller.list)

//GET comments/:id
//show specific comment by id
router.get('/comments/:id', controller.show)

//POST comments
//create a new comment
router.post('/comments', controller.create)


module.exports = router;