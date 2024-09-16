const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//require dotenv
require("dotenv").config();

mongoose.connect("mongodb://localhost/my_db");
let db = mongoose.connection;

const app = express();
const port = 3000;

// Check connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check for DB errors
db.on("error", (err) => {
  console.log(err);
});

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// bring in models
let Article = require("./models/article");
// let articles = [
//   {
//     id: 1,
//     title: "Article One",
//     author: "John Doe",
//     body: "This is article one",
//   },
//   {
//     id: 2,
//     title: "Article Two",
//     author: "Jane Doe",
//     body: "This is article two",
//   },
//   {
//     id: 3,
//     title: "Article Three",
//     author: "John Doe",
//     body: "This is article three",
//   },
//   {
//     id: 4,
//     title: "Article Four",
//     author: "Jane Doe",
//     body: "This is article four",
//   },
// ];

//load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//articles route
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    // res.render("index", {
    //   title: "Articles",
    //   articles: articles,
    // });
    res.send(articles);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching articles.");
  }
});

// Home Route
app.get("/", async (req, res) => {
  const articles = await Article.find({});

  res.render("index", {
    name: "John Doe",
    age: "25",
    articles: articles,
  });
  //res.send("Hello World!");
});

app.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Add Article",
  });
});

//post
app.post("/articles/add", async (req, res) => {
  //   console.log("Form Submitted");
  //   console.log(req.body.title);
  //   return;

  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  try {
    await article.save();
    res.redirect("/articles");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving the article");
  }
});
// Update Article Body
app.put("/articles/update/:identifier", async (req, res) => {
  try {
    const article = await Article.findById(req.params.identifier);
    if (!article) {
      return res.status(404).send("Article not found");
    }
    await article.updateTitle(req.body.title);
    res.redirect("/articles");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating the article");
  }
});

// Find Articles by Author
app.get("/articles/author/:author", async (req, res) => {
  try {
    const articles = await Article.findByAuthor(req.params.author);
    // res.render("index", {
    //   title: `Articles by ${req.params.author}`,
    //   articles: articles,
    // });
    res.send(articles);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching articles.");
  }
});

const findArticle = (author) => {
  //find an article

  Article.findOne({ author: author })
    .sort({ title: 1 })
    .then((articles) => {
      console.log(articles);
      console.log(articles.description);
    });
};

//route to delete and article
app.delete("/articles/delete/:id", async (req, res) => {
  try {
     const deleted_artilce = await Article.findByIdAndDelete(req.params.id);
    //res.redirect("/articles");
    res.send(deleted_artilce);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting the article");
  }
});

findArticle("John Doe");


console.log("variable from fot env file", process.env.Port);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
