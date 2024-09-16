const express = require("express");
//ceate an express app
const app = express();

const port = 4000;
app.get("/hey", function (req, res) {
  res.end("Hello World!");
});

app.post("/post", function (req, res) {
  res.send("POST request to the homepage");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});
app.get(/a/, function (req, res) {
  res.send("/a/");
});

app.get("/name/:user_name", function (req, res) {
  res.status(200);
  res.set("Content-type", "text/html");
  res.send(
    "<html><body>" +
      "<h1>Hello " +
      req.params.user_name +
      "</h1>" +
      "</body></html>"
  );
});



app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
