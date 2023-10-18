const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

routes(app, express);

module.exports = app;
