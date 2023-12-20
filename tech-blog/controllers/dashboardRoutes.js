const express = require("express");
const router = express.Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// GET route for the dashboard page
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    res.render("dashboard", { ...user, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
