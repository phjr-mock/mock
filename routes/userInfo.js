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

//mock data
var loginData = require("../mock/login");
var registerData = require("../mock/register");
//设置请求头信息
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var app = express();

//登录
router.all('/login', urlencodedParser, function (req, res, next) {
    setTimeout(function(){
        res.json(loginData);
    },2000)
});
//注册
router.all('/register', urlencodedParser, function (req, res, next) {
    setTimeout(function(){
        res.json(registerData);
    },2000)
});
module.exports = router;