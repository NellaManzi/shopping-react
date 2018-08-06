const query = require('./controllers/query');

module.exports = (app) => {
  app.get('/api/query', query.get);
};
