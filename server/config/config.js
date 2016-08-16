/*
* Module dependencies
*/
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


/**
* Configuration
*/
exports = module.exports = function (app, express) {
   app.set('views', path.resolve(__base + '../public'));
   app.engine('html', require('ejs').renderFile);
   app.set('view engine', 'html');

   app.use(logger('dev'));
   app.use(bodyParser.urlencoded({
      extended: true
   }));

   app.use(bodyParser.json());
   app.use(express.static(path.resolve(__base + '../public')));
   app.use(cookieParser());
};
