const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
  {
    date: {
      type: Date,
      default: Date.now
    },
    
    // Exercise array
    exercise: [{
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: {
        type: Number,
        required: true,
      },
      repetions: {
        type: Number,
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
    }]
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;