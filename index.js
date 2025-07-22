console.log('Before');
getUser(1, function(user){
    // console.log('User', user)
    getRepositories(user.gitHubusername,(repos)=>{
        console.log('Repos', repos)
    })
})
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