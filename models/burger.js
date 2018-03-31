const orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    delete: function (id, cb) {
        orm.deleteOne("burgers", id, function(res) {
            cb(res);
        })
    },

    create: function(name, cb) {
        orm.insertOne("burgers", name, function(res) {
            cb(res);
        })
    },

    update: function(id, cb) {
        orm.updateOne("burgers", id, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;