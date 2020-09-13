function aaa(){
    var a = 0;
    return  function (){
        ++a
        console.log( ++a);
        //return a += 1;
    }
}
var aa = aaa()
aa()//1
aa()//2
// console.log(aa());

// console.log(aa());
// console.log(aa());

console.log("--------------");
// console.log(aaa()());//1
// console.log(aaa()());//1
aaa()()//1
aaa()()//1

console.log("---------------");

// setInterval(aaa(), 2000);
