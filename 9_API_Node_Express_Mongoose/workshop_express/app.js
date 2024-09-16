const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//adding the template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//middleware
const authenticate = (req, res, next) => {
  const { email, password } = req.body;
  if (email === "johndoe@gmail.com" && password === "1") {
    next();
  } else {
    res.render("login", { error: "Invalid email or password or smth" });
  }
};

//home route
app.get("/home", (req, res) => {
  res.render("home");
});

//about route
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.render("login", { error: null });
});

//login post route
app.post("/login", authenticate, (req, res) => {
  res.redirect("/home");
});

let array_of_products = [
  { name: "product1", price: 100 },
  { name: "product2", price: 200 },
  { name: "product3", price: 300 },
];

app.get("/products", (req, res) => {
  res.send(array_of_products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
