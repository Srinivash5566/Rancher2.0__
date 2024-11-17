const mongoose = require('mongoose');

const userMsgSchema = new mongoose.Schema({
    msgId: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    Msg: {
        type: String,
        required: true
    }
});
const userMsg = new mongoose.model('UserMsg', userMsgSchema);
module.exports = userMsg;