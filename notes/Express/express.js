// https://www.npmjs.com/package/express

// Express methods:
// app.get()
// app.post()
// app.put()
// app.delete()

const express = require('express');
const app = express();

// define a route
app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on port 3000'));

// no if blocks. define route blocks with app.get