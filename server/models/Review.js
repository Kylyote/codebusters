const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    trim: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now,
  },
  reviewScore: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

// write query to get all reviews and scores, then mutation to average scores and store in user model
