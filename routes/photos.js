const PICTURES_FOLDER = "public/pictures"
const CURRENT_DIR_SYMBOL = "";

var express = require('express');
var fs = require('fs');
var path = require('path')
var router = express.Router();

// Get a list of photo URLs
router.get('/', function(req, res, next) {
    var fileNames = getFilenames(PICTURES_FOLDER);
    res.json(JSON.stringify(fileNames))
});

function getFilenames(directory) {
    var files = fs.readdirSync(directory);
    var fileNames = [];
    var fileMap = {};

    fileMap[CURRENT_DIR_SYMBOL] = [];

    for (var i = 0; i < files.length; i++) {
        var fullPath = path.join(directory, files[i]);

        if (fs.statSync(fullPath).isDirectory()) {
            fileMap[files[i]] = getFilenames(fullPath)[CURRENT_DIR_SYMBOL];
        } else {
            fileMap[CURRENT_DIR_SYMBOL].push(files[i]);
        }
    }

    return fileMap;
}

module.exports = router;