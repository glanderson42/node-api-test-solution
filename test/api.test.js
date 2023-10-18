const request = require('supertest');
const { expect } = require('chai');

const app = require('../src/app');

describe('GET /api/posts', () => {
  it('should respond with an array of posts', async () => {
    const response = await request(app).get('/api/posts');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });
});

describe('GET /api/posts/:id', () => {
  it('should respond with a single post', async () => {
    const response = await request(app).get('/api/posts/1');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('object');
    expect(response.body.data).to.have.property('id', 1);
  });

  it('should respond with a 404 if post is not found', async () => {
    const response = await request(app).get('/api/posts/999999');
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal('Post not found');
  });
});

describe('GET /api/posts/:id/comments', () => {
  it('should respond with an array of comments', async () => {
    const response = await request(app).get('/api/posts/1/comments');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });
});

describe('GET /api/tags/:name', () => {
  it('should respond with an array of posts', async () => {
    const response = await request(app).get('/api/tags/bepob');
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });

  it('should respond with a 404 if tag is not found', async () => {
    const response = await request(app).get('/api/tags/testtag');
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal('Posts not found');
  });
});
