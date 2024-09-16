// let fs = require('fs');

// console.log("file name", __filename );
// console.log("dir name",  __dirname );


// let filePath = __dirname + '/new.js'
// console.log("file path", filePath);


// fs.writeFile(filePath, 'Dummy Text For Testing !!!!', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File created and data written successfully!");
// });

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
let t = setTimeout(printHello, 2000);
clearTimeout(t);
setInterval(printHello, 2000);

