const Jabber = require('jabber');
const fs = require('fs');

const jabber = new Jabber.default();
const tags = [];

for (let i = 0; i < 10; ++i) {
  tags.push(jabber.createWord(5));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Generate posts
const posts = [];
for (let i = 1; i < 101; ++i) {
  posts.push({
    id: i,
    title: jabber.createParagraph(30),
    headline: jabber.createParagraph(10),
    body: jabber.createParagraph(120),
    created_at: '2023-02-11',
    tags: [tags[getRandomInt(10)], tags[getRandomInt(10)]]
  });
}

// Generate comments
const comments = [];
for (let i = 1; i < 101; ++i) {
  comments.push({
    id: i,
    author: jabber.createFullName(),
    body: jabber.createParagraph(120),
    created_at: '2023-02-11',
  });
}

fs.writeFile('../data/posts.json', JSON.stringify(posts, null, 2), (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});

fs.writeFile('../data/comments.json', JSON.stringify(comments, null, 2), (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
