/*
 * @date: 2017.9.20
 * @fun : 首页页面
 */
'use strict';
var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var request = require('request-json');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('../config.js');
var logger = require("../logger");
//设置请求头信息
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var app = express();

//首页
router.get('/', urlencodedParser, function (req, res, next) {
    res.render('index', {
        title: "首页",
    });
});
module.exports = router;