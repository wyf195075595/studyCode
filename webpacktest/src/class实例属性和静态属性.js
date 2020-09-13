//创建一个类
function Person (name,age){
  this.name = name
  this.age = age
}
Person.info = '我是静态属性'
// info 属性直接挂载给了构造函数，所以它是构造函数
var p = new Person('www',18);
console.log(p)
//通过new实例访问到的属性,叫做【实例属性】
console.log(p.name)
console.log(p.age)
console.log(p.info)

//【静态属性】通过构造函数直接访问到的属性，叫做【静态属性】

//--------------------------------------
console.log('------------------华丽分割线------------------')


//创建一个类
class Animal {
  //类中的构造器，如果没有手动创建，默认有一个看不见的（空构造器）constructor(){}
  constructor(name,age){
    this.name = name 
    this.age = age 
  }
  //在class内部通过static修饰的属性就是静态属性
  static info = 'quan'
}

var dog = new Animal('小狗',2)

console.log(dog)
console.log(dog.name)
console.log(dog.age)
console.log(dog.info)
console.log(Animal.info)