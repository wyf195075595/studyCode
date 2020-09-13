
function ok(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( '2222')
        },1000)
    })
    // return '2222'
    
}
const aaa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve( '2222')
    },1000)
})
const bbb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve( '333')
    },1000)
})

async function todo(){
    console.log(1);
    var data = await bbb
    console.log(data);
    console.log(3);
}
todo()