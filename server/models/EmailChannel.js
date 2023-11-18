// This is the ES6 way of importing modules. It's equivalent to "const mongoose = require('mongoose');"
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;
// import { Schema } from "mongoose";

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
// export const EmailChannel = mongoose.model("EmailChannel", emailChannelSchema);

module.exports = mongoose.model("EmailChannel", emailChannelSchema);
