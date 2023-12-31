const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Order = require("./Order");
const Language = require("./Language");
const Service = require("./Service");
const MessageChannel = require("./MessageChannel");
const EmailChannel = require("./EmailChannel");
const Reviews = require("./Review");

// Remember to change username back to true when we're ready to implement it
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
    minlength: 6,
    maxlength: 20,
  },
  image: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  subscription: {
    type: String,
    enum: ["Free", "Gold"],
    default: "Free",
    required: true,
  },
  avgScore: {
    type: Number,
    default: 0,
  },
  reviews: [Reviews.schema],
  services: [Service.schema],
  languages: [Language.schema],
  orders: [Order.schema],
  messages: [MessageChannel.schema],
  emails: [EmailChannel.schema],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
