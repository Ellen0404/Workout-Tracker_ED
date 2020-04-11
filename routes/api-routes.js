const { Workout } = require("../models");

module.exports = function (app) {

    app.post("/api/workouts", ({ body }, res) => {
        console.log("POST WORKS!!");
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
    app.get("/api/workouts", ({ body }, res) => {
        console.log("GET WORKOUTS is working!!!");
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    //?????????
    app.get("/api/workouts:id", function (req, res) {
        console.log("ID working");
        Workout.update({ _id })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.get("/api/workouts/range", ({ body }, res) => {
        console.log("RANGE working!!");
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

}