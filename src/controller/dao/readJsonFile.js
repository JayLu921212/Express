var fs = require('fs');


module.exports.readJsonFile = function (req, callback) {
    fs.readFile(__dirname + '/file.json',  {flag: 'r+', encoding: 'utf8'}, function (err,data) {
        var json =  JSON.parse(data);
        callback(json.pageRoutes);
    })
}