const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
    Services: {
    type: String,
    enum: ["Tutoring", "Website Building", "Code Review"],
},
skill: {
    type: String,
    required: true,
    enum: [
      "Youngling",
      "Padawan",
      "Jedi Knight",
      "Jedi Master",
      "Council Member",
    ],
  },

});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
