// Promise
// 1. Holds the eventual result of an asynchronous operation
// 2. Pending (async operation)-> Fulfilled (if something went wrong then it will be rejected)

const p = new Promise(function(resolve, reject) {
    // Kick off some async work
    // ... 
        setTimeout(() => {
            // resolve(1);
            reject(new Error('message'));
        }, 2000);
    });
    
    // Resolve:
    // p.then(result => console.log('Result', result));
    
    // Reject:
    p
        .then(result => console.log('Result', result))
        .catch(err => console.log('Error', err.message));