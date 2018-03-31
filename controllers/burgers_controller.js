const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data });
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    id = req.params.id;
    burger.delete(id, function() {
        res.status(200).end();        
    });
});

router.put("/api/burgers/:id", function(req, res) {
    id = req.params.id;
    burger.update(id, function() {
        res.status(200).end();     
    });
});

router.post("/api/create", function(req, res) {
    var name = req.body.name;
    burger.create(name, function() {
        res.status(200).end();
    })
});

module.exports = router;
