require('express-async-errors');

const express = require('express');
const cors = require('cors');

const routers = require('./routers');
const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.use(errorMiddleware);

module.exports = app;
