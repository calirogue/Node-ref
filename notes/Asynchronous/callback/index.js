// Asynchronous
console.log('Before');
getUser(1, function(user) {
    console.log('user', user);
    getRepo(user.github, (repos) => {
        console.log('Repos', repos);
        getCommits(repo, (commits) => {
            // callback hell
        });
    });
});
console.log('After');


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