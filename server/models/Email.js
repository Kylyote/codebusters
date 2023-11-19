// The ES6 way of importing is "import mongoose from 'mongoose'".
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const emailSchema = new mongoose.Schema({
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

// Using "export" in front of const is the same as using "module.exports" for ES6.
const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
