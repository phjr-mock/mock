#!/usr/bin/env bash
#node --harmony ./src/index.js

export NODE_ENV=build
export NODE_PORT=3055
supervisor --harmony ./app.js

