#!/usr/bin/env bash

export NODE_ENV=production
export NODE_PORT=3055
pm2 restart eloan-web
