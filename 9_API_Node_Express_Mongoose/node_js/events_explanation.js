// Import events module
var events = require("events");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler
eventEmitter.on("connection", function () {
    console.log("connection event handled.");
  });

eventEmitter.emit("connection");

