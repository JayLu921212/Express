/**
 * Created by lujunjie on 2017/8/6.
 */
var express = require("express");
var router = express.Router();


router.get('/test', function(req, res) {
    // res.sendfile( + '/test.html');
    res.render('test',{
        layout: "index"
    });
});

router.get('/fake', function(req, res) {
	// res.sendfile( + '/test.html');
	res.render('fake',{
		layout: "index"
	});
});
router.get('/temp', function(req, res) {
	// res.sendfile( + '/test.html');
	res.render('temp',{
		layout: "index"
	});
});
router.get('/algorithm', function(req, res) {
	// res.sendfile( + '/test.html');
	res.render('algorithm',{
		layout: "index"
	});
});
router.get('/event', function(req, res) {
    // res.sendfile( + '/test.html');
    res.render('event',{
        layout: "index"
    });
});


module.exports = router;
