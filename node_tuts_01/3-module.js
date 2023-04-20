// Modules
// Node uses CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const {name1, name2} = require('./modules/names');
const {sayHello: demoFunction} = require('./modules/functions');
const {singlePerson, items} = require('./modules/alternate-export');

demoFunction(name1);
demoFunction(name2);
console.log(singlePerson, items);

require('./modules/mind-grenade');