const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const populateDatabase = require('./models/chuckNorrisQuotesModel').seed;

app
  .use(router.routes());

populateDatabase();
app.listen(3000);