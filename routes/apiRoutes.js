const router = require("express").Router();
const { Workout } = require("../models/workouts");
const db = require("../models");

// Reads workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// Creates new workouts
router.post("/api/workouts", ({body}, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout)
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    console.log(body);
    Workout.findByIdAndUpdate(
      params.id,
      {$push: {exercise: body}},
      {new: true, runValidators: true}
    )
    .then ((dbWorkout) => {
    res.json(dbWorkout),
    console.log(dbWorkout)
  })
  .catch(err => {
    res.status(400).json(err)
  });
});

module.exports = router;