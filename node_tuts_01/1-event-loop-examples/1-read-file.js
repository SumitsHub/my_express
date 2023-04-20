// Important topics: 1.event loop, 2.async patterns, 3.event emitters and 4.streams
// 

//? timer
// console.time();
// let count = 0;
// for(let i=0; i<100000; i++) {
//     count += i;
// }
// console.timeEnd();

const {readFile} = require('fs');

console.log('started first task')

readFile('./content/first.txt', 'utf-8', (err, res)=>{
    if(err) {
        console.log(err);
        return
    }
    console.log(res);
    console.log('completed first task');
})

console.log('starting next task');