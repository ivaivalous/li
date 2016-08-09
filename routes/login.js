var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');
var auth = require('../backend/authentication.js');
var url = 'mongodb://localhost:27017/li';

router.post('/', function(req, res, next) {
    var code = req.body.code;

    if (code == undefined) {
        res.status(403);
        res.json({"success": false});
        return;
    }

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        getGuests(
            db, code,
            function(data) {
                // Code was found
                data.jwt = auth.sign(data);
                res.status(200);
                res.json(data);
            },
            function() {
                // Code not found
                res.status(403);
                res.json({"success": false});
                db.close();
        });
    });
});

var getGuests = function(db, code, successCallback, errorCallback) {
    db.collection('li').findOne(
        {"code": code}, function(err, result) {
            assert.equal(err, null);

            if (result) {
                successCallback(result);
                return;
            } else {
                errorCallback();
            }
        }
    );
};

module.exports = router;
