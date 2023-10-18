const getPostByTag = require('../controller/tag');

module.exports = (app, express) => {
  const router = express.Router();
  router.get('/:name', getPostByTag);

  return router;
};
