const connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, name, cb) {         
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + name + "', false)";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(table, burgerid, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE id = " + burgerid + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        })
    },

    deleteOne: function(table, burgerid, cb) {
        var queryString = "DELETE FROM " + table + " WHERE id = " + burgerid + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;