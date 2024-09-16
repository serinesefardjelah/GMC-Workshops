require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// View Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
// Fake Authentication Middleware
const authenticate = (req, res, next) => {
  const { email, password } = req.body;
  if (email === "johndoe@gmail.com" && password === "123456John") {
    next();
  } else {
    res.render("login", { error: "Invalid email or password" });
  }
};
// Routes
app.get("/", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", authenticate, (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
// Start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
