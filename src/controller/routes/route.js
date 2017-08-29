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

router.get('/fake', function(req, res) {
	// res.sendfile( + '/test.html');
	res.render('fake',{
		layout: "layout.html"
	});
});
router.get('/temp', function(req, res) {
	// res.sendfile( + '/test.html');
	res.render('temp',{
		layout: "layout.html"
	});
});


module.exports = router;
