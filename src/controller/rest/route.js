/**
 * Created by lujunjie on 2017/8/6.
 */
var express = require("express");
var router = express.Router();


var success = {};

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
    var obj = [{
        tag: "fake",
        href: "/fake"
    },{
        tag: "temp",
        href: "/temp"
    },{
        tag: "home",
        href: "/test"
    }]
    var handler = function (res, result) {
        success["data"] = result;
        res.json(success);
    }
    handler(res, obj);
});

module.exports = router;
