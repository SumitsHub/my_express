// GLOBALS    - NO WINDOW !!! -> No Browser

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module(file)
// process    - info about env where the program is being executed

console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(process);

// setTimeout(() => {
//     console.log('Hello World');
// }, 1000);
// console.log('Yess');
// for (let index = 0; index < 1000000; index++) {
//     if(index % 123 === 0) console.log(index);
// }

setInterval(() => {
    console.log("Hello World");
}, 1000);