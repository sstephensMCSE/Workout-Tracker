const router = require("express").Router();
const Workout = require("../models/workout.js");

// post the new workout to the API
router.post("/api/workouts", (req, res) => {
    console.log(`In route POST /api/workouts/`);
    var body = req.body;
    body.date = new Date().setDate(new Date().getDate());
    console.log(body);

    Workout.create(body)
        .then(dbWorkout => {
            console.log(`Workout added via POST /api/workouts`);
            res.json(dbWorkout)
        })
        .catch(err => {
            console.log(`Workout add FAILED via POST /api/workouts`);
            res.status(400).json(err);
            console.log(err);
        });
});

// Put the new exercise into the workout.
router.put("/api/workouts/:id", (req, res) => {
    console.log(`In route Put /api/workouts/:id`);
    console.log(`ID:  ${req.params.id}`);

    const query = {
        _id: req.params.id
    };

    const updateString = {
        $push: {
            exercises: req.body
        }
    };

    Workout.updateOne(query, updateString)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        });
});

// get all workouts or return none found.
router.get("/api/workouts", (req, res) => {
    console.log(`In GET /api/workouts`);
    //Using find instead of findAll so we return an array with one object instead of just an object
    Workout.find({})
        .sort({
            date: -1
        })
        .limit(1)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(`No workouts found`)
            res.status(400).json(err);
        });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
    console.log(`In GET /api/workouts/range`);
    Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(`No workouts found`)
            res.status(400).json(err);
        });
});

module.exports = router;