console.log('Before');
getUser(1, getRepositories)
function getRepositories(user){
   getRepositories(user.gitHubusername,getCommits) 
}
function getCommits(repos){
getCommits('Repos', displayCommits)
}
function displayCommits(commits){
    console.log(commits)
}
console.log('After');
function getUser(id, callback){
setTimeout(()=>{
    console.log('Reading user form database....')
    callback( { id:id, gitHubusername:'Marwan'})
}, 2000)

}
function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Reading form database....')
        callback(['repo1','repo2','repo3'])
    },2000)
}