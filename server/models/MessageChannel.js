// This is the ES6 way of importing modules. It's equivalent to "const mongoose = require('mongoose');"
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import { Schema } from "mongoose";
const {Schema} = require("mongoose");

const messageChannelSchema = new mongoose.Schema({
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
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
  ],
});

// Using "export" is the same as using "module.exports"
// export const MessageChannel = mongoose.model(
//   "MessageChannel",
//   messageChannelSchema
// );

module.exports = mongoose.model("MessageChannel", messageChannelSchema);
