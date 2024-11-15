const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = new User({ userName, email, password });
        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { userName, email, password },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};
