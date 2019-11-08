var express = require("express");
var route = require("./router/router");
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');

var rootPath = path.resolve(__dirname, '..');
var app = express();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// set view path
app.set('views', path.join(rootPath, './views'));
// set view engine template
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

route(app);

// app.listen('3800', '127.0.0.1'); // 仅允许本地访问
app.listen('3800', '0.0.0.0');