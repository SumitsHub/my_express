// Events
// Event-Driven Programming
// Used Heavily in Node.js

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} ${id}`);
})

// we can have multiple funtions for same event
//? must listen for event first then emit -> first on then emit

customEmitter.on('response', ()=>{
    console.log('Heyy');
})
customEmitter.emit('response', 'john', 34)