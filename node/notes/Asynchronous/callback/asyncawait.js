// Async and wait

// Consuming Promises

// Consuming Promises

// Asynchronous
console.log('Before');

// Promised based approach:
// getUser(1)
//     .then(user => getRepo(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commiits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and await approach:
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepo(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
}
displayCommits();

console.log('After');
// synchronous
function getUser(id) {
    return new Promise((resolve, reject) => {
        // kick off async work
        setTimeout(() => {
            console.log('read');
            resolve({ id: id, gitHub: 'matt' });
        }, 2000);
    });
}

function getRepo(username) {
    return new Promise((reject) => {
        setTimeout(() => {
            console.log('calling github');
            reject(new Error('Could not get error'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github');
            resolve(['commit']);
        }, 2000);
    });
}