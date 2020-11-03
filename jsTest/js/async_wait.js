function getOptions(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let str = '';
            [1,2,3,4,5,6].forEach(ele=>{
                str += `<option value="${ele}">${ele}</option>`
            })
            resolve(str)
        })
    })
}

console.log('主线程1');

async function addOption(callback){
    var option = await getOptions()
    callback(option)
}


// !(async ()=>{
//     console.log('子线程1');
//     var option = await getOptions()
//     console.log(option);
// })()
addOption((res)=>{
    console.log(res);
})
console.log('主线程2');