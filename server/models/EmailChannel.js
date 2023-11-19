const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const emailChannelSchema = new mongoose.Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user2: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  email: [
    {
      type: Schema.Types.ObjectId,
      ref: "Email",
      required: true,
    },
  ],
});

// Using "export" is the same as using "module.exports"
export const EmailChannel = mongoose.model("EmailChannel", emailChannelSchema);
