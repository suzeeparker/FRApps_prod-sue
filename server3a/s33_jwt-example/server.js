
      require("dotenv").config();
const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');   // added

const apiRouter = require('./apiRouter');

const app = express();

const PORT= process.env.PORT;

    app.use(bodyParser.json());

var pCors_Config = {
    origin: 'http://localhost:3001',
    credentials: true
    };
var pCors_Config = { }
    app.use( cors( pCors_Config )

    apiRouter.use(cookieParser());  // added
    app.use('/apiRouter',apiRouter)

    app.listen(PORT, ()=>{
        console.log(`server is listening  on ${PORT}`);
    });

module.exports = app;