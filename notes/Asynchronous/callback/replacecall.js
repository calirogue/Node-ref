// Replacing callbacks with promises
// Asynchronous
console.log('Before');
getUser(1, getRepo);
console.log('After');

function getRepo(user) {
    getRepo(user.github, getCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getCommits(repos) {
    console.log(commits);
}


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