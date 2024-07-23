const express = require('express');
const Order = require('/models/Order');
const User = require('/models/User');
const { authenticateToken } = require('/middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    await User.findOneAndUpdate(
        { username: req.user.username },
        { $push: { orders: order._id } }
    );
    res.status(201).json(order);
});

router.get('/', authenticateToken, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('orders');
    res.json(user.orders);
});

module.exports = router;