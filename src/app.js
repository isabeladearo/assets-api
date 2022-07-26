require('express-async-errors');

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = require('./docs/swagger.config.json');

const routers = require('./routers');
const { errorMiddleware } = require('./middlewares');

const app = express();

const swaggerDoc = swaggerJSDoc(options);

app.use(cors());

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routers);

app.use(errorMiddleware);

module.exports = app;
