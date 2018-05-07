'use static';

var express = require('express');
var request = require('request-json');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var logger = require("./logger");
var config = require('./config');
var morgan = require('morgan');
var app = express();

app.use(cookieParser());
app.use(morgan('short'));
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './public/')));

/*
 * 页面渲染及数据接口
 */
//首页
var index = require('./routes/index');
var userInfo = require('./routes/userInfo');
/*
 * 页面渲染及数据接口
 */
//首页-录入
app.use('/', index);
app.use('/userInfo', userInfo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    logger.error(err);
    // render the error page
    res.status(err.status || 500);
    res.render('error', {
        "msg": '服务异常'
    });
});

app.listen(config.url.app_port(), "0.0.0.0", function() {
    logger.info('NODE_ENV',config.NODE_ENV);
    logger.info('port===>','http://127.0.0.1:' + config.url.app_port());
});