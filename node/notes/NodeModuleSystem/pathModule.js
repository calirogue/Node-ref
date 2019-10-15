// path(parse)
// https://nodejs.org/dist/latest-v10.x/docs/api/path.html
// path to file name
const path = require('path');

let pathObj = path.parse(__filename);

console.log(pathObj);
