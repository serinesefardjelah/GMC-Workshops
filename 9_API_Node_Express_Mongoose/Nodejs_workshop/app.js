const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//create an express app
const app = express();
const port = 8000;

mongoose.connect("mongodb://localhost/workshop_node");
//bring in models
let Article = require("./models/article");

let db = mongoose.connection;

// Check connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check for DB errors
db.on("error", (err) => {
  console.log(err);
});

//Simple request time logger
const myLogger = function (req, res, next) {
  console.log("A new request received at " + Date.now());
  next();
};
//making the app avaialble from monday to thursday from 9am to 5pm only
const timeChecker = (req, res, nex) =>{
  //check time
  //if(in) next()
  //else return error 
}
app.use("/articles", myLogger);

const articlesMiddleware = function (req, res, next) {
  console.log("You tried to get articles");
  next();
};
//articles route
app.get("/articles", articlesMiddleware, async (req, res) => {
  console.log("You tried to get articles last");
  try {
    const articlesFromDb = await Article.find({});
    //res.send(articlesFromDb);

    res.render("articles", {
      title: "Articles",
      articles: articlesFromDb,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching articles.");
  }
});

let arrayOfArticles = [
  {
    id: 1,
    title: "First Article",
    body: "This is the body of the first article",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Second Article",
    body: "This is the body of the second article",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "Third Article",
    body: "This is the body of the third article",
    author: "new author",
  },
];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about page", message: "Hello about page!" });
});

//articles by author route
// app.get("/articles/:author_name", async (req, res) => {
//   try {
//     const articlesFromDb = await Article.find({
//       author: req.params.author_name,
//     });
//     res.render("articles", {
//       title: "Articles",
//       articles: articlesFromDb,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("An error occurred while fetching articles.");
//   }
// });

//add article route
app.get("/article/add", (req, res) => {
  res.render("add_article", { title: "Add Article" });
});

//add article submit POST route
app.post("/article/add", async (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.content = req.body.content;

  try {
    await article.save();
    res.redirect("/articles");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while saving the article.");
  }
});

let products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description of product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description of product 2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description of product 3",
  },
];

//getting list of products
app.get("/lyza", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
