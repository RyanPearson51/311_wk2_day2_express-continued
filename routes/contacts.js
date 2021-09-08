const express = require('express');

const router = express.Router();

const controller = require('../controllers/contacts')

//GET contacts
//show all contacts
router.get('/contacts', controller.list)

//GET contacts/:id
//show specific contact by id
router.get('/contacts/:id', controller.show)

//POST contacts
//create a new contact
router.post('/contacts', controller.create)


module.exports = router;