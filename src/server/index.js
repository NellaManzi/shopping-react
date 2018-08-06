const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e);
    console.log('APPLICATION ERROR:', err);
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);

app.use(logger.expressMiddleware);
app.use(bodyParser.json());

require('./routes')(app);

// application routes (this goes last)
setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
