const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/team_router'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.ico`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000 );
    

let app = express();

app
    .set('views', viewDir)
    .set('view engine', 'ejs')
    .set('port', port )

    // Middleware - quita y pone funciones
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded( {extended: false } ))
    .use( publicDir )
    .use( favicon )
    .use( morgan('dev') )
    .use( restFul )
    .use( routes );
     
module.exports = app;
