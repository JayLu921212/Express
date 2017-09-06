// var dao = global.routes.dao.readJsonFile;

module.exports.readJsonFile = function (req,callback) {
    global.routes.dao.readJsonFile.readJsonFile(req,function (result) {
        var filteredResult = [];
        if (req.body.key === "all") {
            filteredResult = result;
        } else {
            result.forEach(function (t) {
                if (JSON.stringify(t).indexOf(req.body.key) !== -1) {
                    filteredResult.push(t)
                }
            });
        }
        callback(filteredResult);
    })
}