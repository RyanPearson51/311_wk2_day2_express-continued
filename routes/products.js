const express = require('express');

const router = express.Router();

const controller = require('../controllers/products')

//GET products
//show all products
router.get('/products', controller.list)

//GET vehilces/:id
//show specific vehilce by id
router.get('/products/:id', controller.show)

//POST products
//create a new product
router.post('/products', controller.create)


module.exports = router;