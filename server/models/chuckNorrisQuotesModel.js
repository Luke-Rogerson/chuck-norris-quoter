const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chuckNorrisQuotesDatabase');
const db = {};
const quotesJSON = require('./quotes.json').value;

db.Quotes = mongoose.model( 'Quotes', {
  ID : Number,
  joke: String
});

db.getRandomJoke = async () => {
   const lengthOfCollection = await db.Quotes.count({});
   const random = Math.floor(Math.random() * lengthOfCollection);
   return await db.Quotes.findOne().skip(random).exec();
};

db.getAllJokes = async () => {
  return await db.Quotes.find().sort({ID: 'asc'}).exec();
};

db.seed = async () => {
  await db.Quotes.deleteMany({});
  quotesJSON.forEach(async quote => {
    await db.Quotes.create({
      ID: quote.id,
      joke: quote.joke
    });
  })
}

module.exports = db;
