var fs = require("fs");
// fs is the file system module we will see it later
var data = fs.readFileSync("input.txt");

console.log(data.toString());

console.log("Program Ended");

let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 24 },
    { name: "Jack", age: 30 },
    ];
