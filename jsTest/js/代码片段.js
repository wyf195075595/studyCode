// console.log(2e4);

let arr1 = [1,2,3,4,{name:'brayn'},false,NaN,null,undefined,'','aaa',];
// arr1.foo = {}

// let obj = {
//     'key1':1,
//     'key2':2,
//     'key3':3,
//     'key4':4
// }
// for (let key in arr1) {
//     console.log(key);
// }
arr1.forEach(element => {
    console.log(element);
});

// console.log(arr1);