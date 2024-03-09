const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter the field"],
    },
    genre: {
      type: String,
      required: [true, "please enter the field"],
    },
    rating: {
      type: Number,
      required: [true, "please enter the field"],
    },
    streaming_link: {
      type: String,
      required: [true, "please enter the field"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("movies", movieSchema);
