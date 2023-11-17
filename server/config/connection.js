const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codebusters"
);

module.exports = mongoose.connection;

//user: kjocoy and password: yT9RtLiq3fkkJvkN
