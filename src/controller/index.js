const path = require('path');

async function getIndex(req, res) {
  return res.sendFile(path.join(__dirname, '../public/index.html'));
}

module.exports = { getIndex };
