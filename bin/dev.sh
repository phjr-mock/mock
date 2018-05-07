#!/usr/bin/env bash

export NODE_ENV=build
export NODE_PORT=3055
pm2 start app.js -i 1 --name 'eloan-web_dev'
