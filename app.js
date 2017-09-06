/**
 * Created by jlu122 on 2017/7/21.
 */
//express_demo.js 文件
require('./global');
var express = require('express');
var app = express();
var http = require("http");
var events = require("events");
var emitter = new events.EventEmitter();
var fs = require("fs");
var path = require("path");
// var routes = require('./src/controller/routes/route.js');
var pageRoutes = global.routes.pageroutes;
// var pageroutes = require('./src/controller/rest/route.js');
var apiRoutes = global.routes.apiroutes;
// var routes = require('./route.js');
var exhdbs = require("express-handlebars");
// var sassMiddleware = require('node-sass-middleware');
var compass = require('node-compass');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(pageRoutes);
app.use(apiRoutes);

app.use(compass({
	project: path.join("./public"),
	mode: 'expanded',
	css: 'css',
	sass: 'scss',
	cache: false,
	logging: true
}));
app.use(express.static("./public"));

app.set('views', 'src/views');
app.engine('html', exhdbs({
    extname: 'html',
    layoutsDir: 'src/views/layout',
    dafaultLayout: 'index'
}));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render("home", {
        layout: "index"
    });
});



var server = app.listen(8081, function () {

});
