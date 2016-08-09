var express = require('express');
var jwt = require('jsonwebtoken');
var SECRET_KEY = "khxdh jYUIYIYU dwui &%%W&W&&B3d jHJs";
var auth = {};

auth.sign = function(data) {
    return jwt.sign(data, SECRET_KEY);
};

auth.verify = function(jwtToken) {
    return jwt.verify(jwtToken, SECRET_KEY);
};

module.exports = auth;

