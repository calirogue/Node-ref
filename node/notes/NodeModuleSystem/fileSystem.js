// https://nodejs.org/dist/latest-v10.x/docs/api/fs.html


const fs = require('fs');
// read directory

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Err', err);
    else console.log('Result', files);
});