const { User } = require("../models");

const userData = [
  {
    username: "user1",
    email: "user1@example.com",
    password: "password123",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
