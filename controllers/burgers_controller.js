var express = require("express");

var router = express.Router();


var burgers = require("../models/burgers");


    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        return hbsObject;
    });



router.get("/", function (req, res) {
    burgers.all(function (data) {
        
        // console.log(hbsObject);
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(res.body);
    burgers.create(req.body.name, function (result) {
        console.log(result);
    res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows === 0) {

            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;