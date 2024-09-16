let http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello World !!!! ");
  })
  .listen(8000);

console.log("Server is running on http://localhost:8000");
