// Consuming Promises

// Asynchronous
console.log('Before');
// getUser(1, getRepo);


// function getRepo(user) {
//     getRepo(user.github, getCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// function getCommits(repos) {
//     console.log(commits);
// }

getUser(1)
    .then(user => getRepo(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('commiits', commits))
    .catch(err => console.log('Error', err.message));

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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github');
            resolve(['repo1', 'repo2', 'repo3']);
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