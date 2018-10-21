const Router = require('koa-router');
const router = new Router();
const chuckNorrisQuotesController = require('./controllers/chuckNorrisQuotesController');

router
  .get('/newJoke', chuckNorrisQuotesController.getRandomJoke)
  .get('/pokemon/:id', chuckNorrisQuotesController.getAllJokes);

module.exports = router;
