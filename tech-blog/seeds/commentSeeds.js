const { Comment } = require("../models");

const commentData = [
  {
    commentText: "This is a comment on the first post",
    userId: 2,
    postId: 1,
  },
  {
    commentText: "This is another comment on the first post",
    userId: 2,
    postId: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
