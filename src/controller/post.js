const database = require('../database');

async function getPosts(req, res) {
  const posts = await database.getPosts();

  if (!posts) {
    return res.status(404).json({
      error: 'Posts not found',
    });
  }

  return res.json({
    data: posts
  });
}

async function getPostById(req, res) {
  const { id } = req.params;
  const post = await database.getPostById(id);

  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json({
    data: post
  });
}

async function getCommentsByPostId(req, res) {
  const { id } = req.params;
  const comments = await database.getCommentsByPostId(id);

  return res.json({
    data: comments
  });
}

module.exports = { getPosts, getPostById, getCommentsByPostId };
