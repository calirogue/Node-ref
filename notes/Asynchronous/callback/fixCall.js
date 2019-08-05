// Asynchronous
console.log('Before');
getUser(1, fgetRepo);
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
function getUser(id, callback) {
    setTimeout(() => {
        console.log('read');
        callback({ id: id, gitHub: 'matt' });
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log('calling github');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}