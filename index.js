console.log('Before');
// getUser(1,(user)=>{
//     // console.log('User', user)
//     getRepositories(user.gitHubusername,(repos)=>{
//         getCommit(repos[0], (commits)=>{
//             console.log(commits)
//         })
//     })
// })
//  getUser(1)
// .then(user=>getRepositories(user.gitHubusername))
// .then(repos=>getCommit(repos[0]))
// .then(commits=>console.log('commits', commits))
// .catch(err=>console.log('Error', err.message))
// ;

 async function displayCommits(){
    try{
        const user=await getUser(1)
        const repos=await getRepositories(user.gitHubusername)
        const commits=await getCommit(repos[0])
        console.log(commits)
    }
    catch(err){
        console.log('Error', err.message)

    }
}
displayCommits()



console.log('After');
function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    console.log('Reading user form database....')
    resolve( { id:id, gitHubusername:'Marwan'})
}, 2000)

    })


}
function getRepositories(username){         
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log('Reading form database....')
        resolve(['repo1','repo2','repo3'])
    },2000)

    })

}
function getCommit(repo){
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{
        console.log('Calling the gitHub API...')
        reject(new Error('cond not found the err'))
        // resolve(['commits'])
    }, 2000)
    })
   
}