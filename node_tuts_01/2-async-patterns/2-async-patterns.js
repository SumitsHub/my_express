// const {readFile} = require('fs')
const {readFile} = require('fs').promises

const util = require('util')
const readFilePromise = util.promisify(readFile);


const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}
// getText('./content/first.txt').then((res)=>console.log(res)).catch((err)=>console.log(err))

// readFile('./content/first.txt', 'utf8', (err, data)=>{
//     if(err) {
//         return
//     } else {
//         console.log(data);
//     }
// })

const start = async ()=>{
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    const first = await readFile('./content/first.txt', 'utf8');
    console.log(first);
}
start()