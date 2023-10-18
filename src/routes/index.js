const index = require('../controller/index');
const posts = require('./post');
const tags = require('./tags');

function init(app, express) {
  const elements = { posts, tags };
  const router = express.Router();

  Object.getOwnPropertyNames(elements).forEach((route) => {
    router.use(`/${route}`, elements[route](app, express));
  });

  app.use('/api', router);
  app.use('/', index.getIndex);
  app.use('/post', index.getIndex);
  app.use('/requirements', index.getIndex);
  app.use('/tags/:name', index.getIndex);
}

module.exports = init;
