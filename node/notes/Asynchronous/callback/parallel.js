// Running promises in parallel


// const p1 = new Promise((reject) => {
//     setTimeout(() => {
//         console.log('Async operation 1...');
//         reject(new Error('something failed'));
//     }, 2000);
// });


const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 3...');
        resolve(3);
    }, 2000);
});

Promise.race([p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log('error', err.message));