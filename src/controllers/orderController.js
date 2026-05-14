const { validateOrderData } = require('../Services/orderService');
const Order = require('../models/order');

const createOrder = async (req, res) => {
    try {
        const validation = validateOrderData(req.body);
        
        if (!validation.valid) {
            return res.status(400).json({ error: validation.message });
        }

        const newOrder = await Order.create(req.body);
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar pedido' });
    }
};

module.exports = { createOrder, getOrderById };