const post = require('../controller/post');

module.exports = (app, express) => {
  const router = express.Router();

  router.get('/', post.getPosts);
  router.get('/:id', post.getPostById);
  router.get('/:id/comments', post.getCommentsByPostId);

  return router;
};
