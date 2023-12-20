const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("./config/connection");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js as the templating engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Set up session middleware
app.use(
  session({
    secret: process.env.mysecretkey,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use(routes);

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
