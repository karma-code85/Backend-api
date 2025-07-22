const p= Promise.resolve({id: 1})
p.then(result=>console.log(result))
const pro=Promise.reject(new Error('resons for rejaction'))
pro.catch(err=>console.log(err))