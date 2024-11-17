const express = require('express');
const router = express.Router();
const UserMsg = require('../models/userMsg.model');

// POST route for creating a new message
router.post('/Msg', async (req, res) => {
    const { msgId, userName, Msg } = req.body;
    try {
        const newUserMsg = new UserMsg({ msgId, userName, Msg });
        await newUserMsg.save();
        res.json(newUserMsg);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// DELETE route for deleting a message by msgId
router.delete('/msgDel', async (req, res) => {
    const { id } = req.body;
    try {
        const msg = await UserMsg.findOne({ msgId: id });
        if (!msg) {
            return res.status(404).json({ message: 'Message not found' });
        }
        await msg.deleteOne();
        res.json({ message: 'Message deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET route for retrieving all messages
router.get('/getMsg', async (req, res) => {
    try {
        const msgs = await UserMsg.find();
        res.json(msgs);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
