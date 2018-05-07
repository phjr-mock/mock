var config = require('./config.js');
var winston = require('winston');
var path = require('path');
var fs = require('fs');

function logsDate() {
    var temp = new Date();
    var year = temp.getFullYear();
    var month = temp.getMonth() + 1;
    var dates = temp.getDate();
    month = month > 9 ? month : '0' + month;
    dates = dates > 9 ? dates : '0' + dates;
    return year.toString() + month.toString() + dates.toString();
}

var level, filePath, logDir, dates;
logDir = config.url.logDir();
dates = logsDate();

fs.existsSync(logDir) || fs.mkdirSync(logDir);

if (config.NODE_ENV === 'dist' || config.NODE_ENV === 'production') {
    level = 'info';
    filePath = path.join(logDir, '/xjd-web-app' + dates + '.log');
}
else {
    level = 'debug';
    filePath = path.join(logDir, '/xjd-web-app' + dates + '.log');
}
var logger = new (winston.Logger)({
    level: level,
    transports: [
        new (winston.transports.Console)({
            level: level,
            json: false
        }),
        new (winston.transports.File)({
            filename: filePath,
            level: level
        })
    ]
});

module.exports = logger;
