const comments = require('../../data/comments.json');
const posts = require('../../data/posts.json');

class Database {
  constructor() {
    this.comments = comments;
    this.posts = posts;
  }

  async getComments() {
    return this.comments;
  }

  async getPosts() {
    return this.posts;
  }

  async getPostById(id) {
    return this.posts.find((post) => post.id === Number(id));
  }

  async getCommentsByPostId(id) {
    return this.comments.filter((comment) => comment.id === Number(id));
  }

  async getPostsByTag(tag) {
    return this.posts.filter((post) => post.tags.includes(tag));
  }
}

const database = new Database();

module.exports = database;
