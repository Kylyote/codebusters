const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
    messageContent: {
        type: String,
        required: true,
    },
    messageAuthor: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
