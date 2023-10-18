const database = require('../database');

async function getPostsByTag(req, res) {
  const { name } = req.params;
  const posts = await database.getPostsByTag(name);

  if (posts.length === 0) {
    return res.status(404).json({
      error: 'Posts not found',
    });
  }

  return res.json({ data: posts });
}

module.exports = getPostsByTag;
