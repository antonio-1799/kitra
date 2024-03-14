const express = require('express');
const dotenv = require('dotenv');
const baseRouter = require('./routes/base.router');

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(baseRouter);

module.exports = app;
