const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define listeners
const listener1 = () => console.log('Listener 1 executed');
const listener2 = () => console.log('Listener 2 executed');
const listener3 = () => console.log('Listener 3 executed');

// addListener (alias for on)
emitter.addListener('event1', listener1);

// on (add listener)
emitter.on('event1', listener2);

// once (add one-time listener)
emitter.once('event1', listener3);

// // Emit 'event1' to invoke all listeners
// emitter.emit('event1'); // Output: Listener 1 executed, Listener 2 executed, Listener 3 executed

// // Emit 'event1' again to show that listener3 is removed
// emitter.emit('event1'); // Output: Listener 1 executed, Listener 2 executed

// // removeListener (remove a specific listener)
// emitter.removeListener('event1', listener1);

// // Emit 'event1' to show that listener1 is removed
// emitter.emit('event1'); // Output: Listener 2 executed

// // removeAllListeners (remove all listeners for 'event1')
// emitter.removeAllListeners('event1');

// // Emit 'event1' to show that no listeners are left
// emitter.emit('event1'); // No output

// // Add listeners again
// emitter.on('event1', listener1);
// emitter.on('event1', listener2);

// setMaxListeners (set max listeners)
emitter.setMaxListeners(15);

// listeners (get array of listeners for 'event1')
const listeners = emitter.listeners('event1');
console.log(listeners); // Output: [ [Function: listener1], [Function: listener2] ]

// emit (trigger the event)
emitter.emit('event1'); // Output: Listener 1 executed, Listener 2 executed
