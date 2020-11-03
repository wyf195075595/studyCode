var obj = {
    a:123,
    b:222
}

var obj1 =  Object.assign(obj,{c:333},{d:444})

console.log(obj1);

var arr = [1,2,3,4,5,6]
var r1 = arr.splice(0,1)
// console.log(r1,arr);

console.log(new Date().getTime());
console.log(Date.parse(new Date()));