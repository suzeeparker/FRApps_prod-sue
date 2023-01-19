#!/bin/sh

../node_modules/.bin/json-server  -p 50115 -r api/routes/routes.json --watch api/models/db.json api/models/db.json