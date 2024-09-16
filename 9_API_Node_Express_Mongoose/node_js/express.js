const express = require("express");
//ceate an express app
const app = express();

const port = 4000;

app.get("/products", function (req, res) {
  res.end("List of products");
});

//using path params
app.get("/products/:productId", function (req, res) {

  res.end("Details of product: " + req.params.productId);
});

app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});


app.get("/", function (req, res) {
    res.end("Main page of the website");
  });

//get list of users 
let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 24 },
    { name: "Jack", age: 30 },
    ];
app.get("/users", function (req, res) {

    res.json(users);
    
  });