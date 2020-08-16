console.log('ok')

// 创建一个类
function People (name,age){
    this.name = name
    this.age = age
}

// 添加静态方法
People.hello = function(){
    console.log(`我叫${this.name},我今年${this.age}了`)
}
//添加实例方法
People.prototype.say = function (){
    console.log(`我叫${this.name}`)
}

var xiaoming = new People('小明',3)
xiaoming.say()


console.log(xiaoming)

// 创建Animal类
class Animal {
    constructor(name,action){
        this.action = action
        this.name = name
    }

    // 实例方法
    cry (){
        console.log(this.name +"会"+this.action)
    }

    // 静态方法
    static hello (){
        console.log("我是"+this.name +"，我会"+this.action)

    }
}

var dog = new Animal ('田园犬','跑')
dog.cry()

console.log(dog)

// 封装
class Toast {

    alert = function (text) {
        // console.log('弹窗')
        let pain =  document.createElement('div')
        pain.classList.add('pain-toast')
        pain.innerHTML = text
        document.body.appendChild(pain)
    }
    hide = function (time = 1500) {
        setTimeout(()=>{
            new Toast().hide()
            document.getElementsByClassName('pain-toast')[0].style.display = 'none'
        },time)

    }
}

// new Toast().alert('太好热')
// new Toast().hide()
// 异步动作
function  test1(a,b) {
    return new Promise((resolve,reject)=>{
        if(b!=0){
            setTimeout(()=>{
                // 成功回调
               return resolve(a/b)
                // 后面不会被执行
                console.log('111')
             },2000)
        }else{
            setTimeout(()=>{
                // 失败回调
                reject('被除数不能为0')

              },2000)
        }
        
    }).catch(err=>{
        console.log(err)
    })

    
}

// 同步动作
async function print(a,b) {
   var c =  await test1(a,b)
   console.log(c)
}
console.log(print(10,0))


var arr = [1,2,3]
var reg = new RegExp(/qq/)
console.log( typeof reg)
console.log(arr instanceof RegExp)

console.log(Array)

console.log(typeof 11)
console.log(new String ('xiaoming') instanceof String)
// arr.unshift(3,4,5)
// console.table(arr)

console.log(arr.indexOf(3))
