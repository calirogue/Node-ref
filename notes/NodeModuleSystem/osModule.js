// https://nodejs.org/dist/latest-v10.x/docs/api/os.html


const os = require('os');

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

// console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);