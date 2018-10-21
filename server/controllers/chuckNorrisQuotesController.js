const chuckNorrisQuoteController = {};
const chuckNorrisQuotesModel = require('../models/chuckNorrisQuotesModel');

chuckNorrisQuoteController.getRandomJoke = async function () {
  ctx.body = await chuckNorrisQuotesModel.getRandomJokeFromDatabase();
  ctx.status = 200;
}

chuckNorrisQuoteController.getAllJokes = async function () {
  ctx.body = await chuckNorrisQuotesModel.getAllJokesFromDatabase();
  ctx.status = 200;
}

module.exports = chuckNorrisQuoteController;