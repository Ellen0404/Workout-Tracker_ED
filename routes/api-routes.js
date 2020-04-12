const { Workout } = require("../models");

module.exports = function (app) {


    app.get("/api/workouts", ({ body }, res) => {
        console.log("GET WORKOUTS is working!!!");
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //?????
    app.post("/api/workouts", ({ body }, res) => {
        console.log("POST WORKS!!");
        console.log({ body });
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })



    app.put("/api/workouts/:id", function (req, res) {
        console.log("ID working");
        Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
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
            .then(range => {
                res.json(range);
            })
            .catch(err => {
                res.json(err);
            });
    })

}