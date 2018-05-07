
set NODE_ENV=production
set NODE_PORT=3055
pm2.cmd start app.js -i 1 --name eloan-web
