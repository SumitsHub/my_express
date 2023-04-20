const fs = require('fs');

const res = fs.readFileSync('./data2.txt', 'utf-8');


const splittedString = res.split('\n');

const keyValues = splittedString.map((line)=> line.split(','));
const json = Object.fromEntries(keyValues);

fs.writeFileSync(
    "./result-sync-2.txt",
    `${JSON.stringify(json)}`,
    { flag: "a" } // flag to set append mode
  );

console.log(json);