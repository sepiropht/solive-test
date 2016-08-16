"use strict";
var express = require('express');
var mongoose = require('mongoose');
var http = require('http');

var app = module.exports = express();
global.__base = __dirname + '/server/';

/**
 * Start connection to mongo
 */
require(__base + 'config/db/mongo');

/**
 * Configure mongoose models
 */
require(__base + 'api/models/models')(mongoose);

/**
 * Configure application
 */
require(__base + 'config/config')(app, express);

/*
 * Routes
 */
require(__base + 'api/routes/routes.js')(app);

var server = http.createServer(app);
app.set('port', process.env.PORT || 8000);

server.listen(app.get('port'), function() {
   console.log('Express server listening on port ' + server.address().port);
});
