const { Post } = require("../models");

const postData = [
  {
    title: "First Post",
    content: "Content of the first post",
    userId: 1, // Assuming this ID exists in the users table
  },
  {
    title: "Second Post",
    content: "Content of the second post",
    userId: 1, // Assuming this ID exists in the users table
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
