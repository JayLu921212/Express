/**
 * Created by jlu122 on 2017/7/21.
 */
//express_demo.js 文件

var express = require('express');
var app = express();
var http = require("http");
var events = require("events");
var emitter = new events.EventEmitter();
var fs = require("fs");
var path = require("path");
var routes = require('./src/controller/routes/route.js');
var ejs = require("ejs");
var exhdbs = require("express-handlebars");

app.use('/', routes);
app.use(express.static("public"));

app.set('views', 'src/views');
app.engine('html', exhdbs({
    extname: 'html',
    layoutsDir: 'src/views',
    dafaultLayout: 'layout'
}));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render("body", {
        layout: "layout"
    });
});



var server = app.listen(8081, function () {
});
