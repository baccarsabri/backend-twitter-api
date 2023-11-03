require("@babel/register");
require("babel-polyfill");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('express-logger');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const sessions = require('./controllers/sessionsController');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger({ path: "log/express.log" }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

app.use('/sessions', sessions);
app.listen(8080, () => {
  console.log('App running on port 8080!');
});