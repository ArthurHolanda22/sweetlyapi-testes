const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define as rotas usando as funções que criamos no controlador
router.post('/create', orderController.createOrder);
router.get('/:id', orderController.getOrderById);

module.exports = router;