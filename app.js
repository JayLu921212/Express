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


// emitter.on("error", function (err) {
//     if (err) {
//         console.log("error:" + err);
//     }
// });
//
//
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
//
// function __readFileTest() {
//     // var data = fs.readFileSync('input.txt');
//     // console.log(data.toString());
//     fs.readFile('input.txt', function (err, data) {
//         if (err) return console.error(err);
//         console.log(data.toString());
//     });
// }
//
// var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//     setInterval(function () {
//        console.log("node is working");
//     },2000)
//     __readFileTest();
//
// })