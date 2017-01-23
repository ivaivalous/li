var express = require('express');
var fs = require('fs');
var router = express.Router();
const PICTURES_FOLDER = "public/pictures"

// Get a list of photo URLs
router.get('/', function(req, res, next) {
    var fileNames = getFilenames();
    res.json(JSON.stringify(fileNames))
});

function getFilenames() {
    var files = fs.readdirSync(PICTURES_FOLDER);
    var fileNames = [];

    for (var i = 0; i < files.length; i++) {
      fileNames.push(files[i])
    }

    return fileNames
}

module.exports = router;