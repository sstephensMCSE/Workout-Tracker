const router = require("express").Router();
const Workout = require("../models/workout.js");

// post workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

// post Range
router.post("/api/workouts/range", ({ body }, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

// Put ID
router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.findByIdAndUpdate(  
        params.id,
        {$push:{exercises:body} },
        {new: true,runValidators:true }
       )
       .then(data => res.json(data))
       .catch(err => { 
           res.json(err)
       })
});

// Get workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
  });
  
// Get Range
router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
  });
  
module.exports = router;
