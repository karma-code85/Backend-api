const p1= new Promise((resolve)=>{
setTimeout(()=>{
    console.log('Async opration1...')
    resolve(1);
},2000)
})
const p2= new Promise((resolve)=>{
setTimeout(()=>{
    console.log('Async opration2...')
    resolve(2);
},2000)
})
Promise.race([p1,p2])
.then(result=>console.log(result))