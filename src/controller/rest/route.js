/**
 * Created by lujunjie on 2017/8/6.
 */
// require('./global');
var express = require("express");
var router = express.Router();


var success = {};
// var se = global.routes.services.readJsonFile

router.get("/testapi", function (req, res) {
    var obj = {
        name: "jay"
    };
    var handler = function (res, result) {
        success["data"] = result;
        res.json(success);
    }
    handler(res, obj);
});

router.post("/entranceSearch", function (req, res) {
    var handler = function (result) {
        success["data"] = result;
        res.json(success);
    }
    global.routes.services.readJsonFile.readJsonFile(req, handler);
});

module.exports = router;
