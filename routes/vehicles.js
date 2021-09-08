const express = require('express');

const router = express.Router();

const controller = require('../controllers/vehicles')

//GET vehicles
//show all vehilces
router.get('/vehicles', controller.list)

//GET vehilces/:id
//show specific vehilce by id
router.get('/vehicles/:id', controller.show)

//POST vehilces
//create a new vehilce
router.post('/vehicles', controller.create)


module.exports = router;