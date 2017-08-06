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
var routes = require("./route");
var ejs = require("ejs");
var exhdbs = require("express-handlebars");


// emitter.on("error", function (err) {
//     if (err) {
//         console.log("error:" + err);
//     }
// });




app.get('/', function (req, res) {
    res.render("body", {
        layout: "layout"
    });
});
app.use('/', routes);
app.use(express.static("public"));


app.set('views', 'src/views');
app.engine('html', exhdbs({
    extname: 'html',
    layoutsDir: 'src/views',
    dafaultLayout: 'layout'
}));
app.set('view engine', 'html');


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
