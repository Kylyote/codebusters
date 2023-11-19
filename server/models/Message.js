const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  receiver: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  sentDate: {
    type: Date,
    default: Date.now,
  },
});

// Using "export" is the same as using "module.exports"
export const Message = mongoose.model("Message", messageSchema);
