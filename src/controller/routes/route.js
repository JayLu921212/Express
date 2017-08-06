/**
 * Created by lujunjie on 2017/8/6.
 */
var express = require("express");
var router = express.Router();


router.get('/home', function(req, res) {
    // res.sendfile( + '/test.html');
    res.render('test',{
        layout: "layout.html"
    });
});

module.exports = router;
