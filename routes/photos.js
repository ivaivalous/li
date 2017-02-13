var PICTURES_FOLDER = "public/pictures"
var CURR_DIR = "";
var ORDER_SEPARATOR = "_";

var express = require('express');
var fs = require('fs');
var path = require('path')
var router = express.Router();

// Get a list of photo URLs
router.get('/', function(req, res, next) {
    var fileNames = getFilenames(PICTURES_FOLDER);
    res.setHeader('Content-Type', 'application/json');
    res.json(fileNames)
});

function getFilenames(directory) {
    var files = fs.readdirSync(directory);
    var fileMap = [];
    var current = album(CURR_DIR, CURR_DIR, [], 0);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var fullPath = path.join(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
            var order = getOrder(file);
            var filenames = getFilenames(fullPath)[0].files;

            fileMap.push(album(
                order.name, file, filenames, order.order).asMap());
        } else {
            current.addFiles(file);
        }
    }

    fileMap.push(current.asMap());

    return fileMap;
}

function album(displayName, originalName, fileList, order) {
    var displayName = displayName;
    var originalName = originalName;
    var fileList = fileList;
    var order = order;

    var vm = {};

    vm.addFiles = function(files) {
        fileList.push(files);
    }

    vm.asMap = function() {
        return {
            "displayName": displayName,
            "originalName": originalName,
            "files": fileList,
            "order": order
        };
    };

    return vm;
}

// Ordering albums works by prefixing the folder name with
// a "<number>_". The number is the order in which you would like
// the album to appear. If a prefix is missing, the assumption
// would be this should be the first album. 
function getOrder(directoryName) {
    var buildReturn = function(name, order) {
        return {
            "name": name,
            "order": order
        };
    };

    if (directoryName.indexOf(ORDER_SEPARATOR) != -1) {
        var nameSplit = directoryName.split(ORDER_SEPARATOR);
        // Folders should only contain one underscore
        return buildReturn(nameSplit[1], parseInt(nameSplit[0]));
    }

    // If there is no order designator, the folder will be
    // ordered first.
    return buildReturn(directoryName, 0);
}

module.exports = router;