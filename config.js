var url = {};
var _ = require('lodash');

var NODE_ENV = (function() {

    if (process && process.env && process.env.NODE_ENV) {
        return process.env.NODE_ENV;
    }

    return 'build';
})();

//LOG FILEPATH
var LOGDIR = (function() {
    if (NODE_ENV === 'build') {
        return "logs/";
    }

    if (NODE_ENV === 'test') {
        return '/alidata1/logs/eloan-web';
    }

    if (NODE_ENV === 'dist' || NODE_ENV === 'production') {
        return '/alidata1/logs/eloan-web';
    }

    return '';
})();

//port
var PORT = (function() {
	if (process && process.env && process.env.NODE_PORT) {
        return process.env.NODE_PORT;
    }
    return 3055;
})()
_.extend(url, {
    base: function() {
        return SERVER;
    },
    logDir: function() {
        return LOGDIR;
    },
    app_port: function() {
        return PORT;
    }

});

module.exports = {
    NODE_ENV: NODE_ENV,
    timeout: 10000,
    url: url
};