const router = require("express").Router();

const apiRoutes = require("./api");
const commentRoutes = require("./api/commentRoutes");
const postRoutes = require("./api/postRoutes");
const userRoutes = require("./api/userRoutes");

const dashboardRoutes = require("./dashboardRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/posts", postRoutes);
router.use("/api/users", userRoutes);

router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

module.exports = router;
