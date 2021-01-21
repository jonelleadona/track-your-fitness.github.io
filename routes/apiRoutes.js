const router = require("express").Router();
const db = require("../models");

// Reads workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// Creates new workouts
router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;