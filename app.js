require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const models = require('./models')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const activitiesRouter = require('./routes/activities');

const app = express();


app.use(logger('dev'));
app.use(express.json());
// built in middleware - parses incoming requests with urlencoded payloads - based on body parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// serve files to directory named client/build
app.use(express.static(path.join(__dirname, 'client/build')));


// mount middleware with approprite paths 
app.use('/', indexRouter);
// use v1 as an entry point for development of future APIs - future revamp API built behind v2
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/activities', activitiesRouter);
// handle GET requests to an absolute path
app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app;
