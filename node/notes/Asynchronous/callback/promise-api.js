// Creating settled promises

// Resolve:
const pr = Promise.resolve({ id: 1});
pr.then(result => console.log(result));

// Reject:
const p = Promise.reject(new Error('Reason for rejection...'));
p.catch(error => console.log(error));

