/**
 * Created by lujunjie on 2017/8/6.
 */
var path = require('path');

global.routes = {
    appTools: {

    },
    pageroutes: require('./src/controller/routes/route.js'),
    apiroutes:  require('./src/controller/rest/route.js'),
};
