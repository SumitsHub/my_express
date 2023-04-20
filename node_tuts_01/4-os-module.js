// built-in modules
// Exaples: os, path, fs, http

const os = require('os'); //? not using ./ in path

// info about current user
const user = os.userInfo();
console.log(user);


// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);