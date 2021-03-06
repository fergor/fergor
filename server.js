#!/bin/env node
// Import Modules
var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    basicAuth = require('basic-auth-connect');

// Log stream
var requestLogStream = fs.createWriteStream('./request.log', {flags: 'a'});

// Create Express instance 
var app = express();

// Setup Express middleware
app.use(favicon(__dirname + '/public/img/favicon.png'));
app.use(logger('dev'));
app.use(logger('combined', {stream: requestLogStream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(basicAuth('admin', ''));

// Setup routes
app.get('/api', require('./routes/api'));

app.get('*', function(req, res){
    res.status(404);
    res.end();
});

//
var SERVER_IP = process.env.IP | '0.0.0.0',
    SERVER_PORT = process.env.PORT | 13337;

// Start listening
console.log('Starting Server on ' + SERVER_IP + ':' + SERVER_PORT);
app.listen(SERVER_PORT, SERVER_IP);
