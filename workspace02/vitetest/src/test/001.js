 let obj = {
     name:'张三',
     age:18,
     link:{
        name:'张四',
        age:12,
     }
 }
 let arr = [1,2,3,4,5]
 let result = new Proxy(arr ,{
     get(obj , key){
        //  console.log(obj , key);
         return obj[key];
     },
     set(obj , key, value){
        //  console.log(obj , key, value);
        obj[key] = value;
        console.log('updata');
        //  return true;
     }
 })

result[1] = 'ls' ;
console.log(result[1]) ;


function reactive(obj){
    if(typeof obj === 'object'){

        if(obj instanceof Array){
            obj.forEach((ele,index)=>{
                if(typeof ele === 'object'){
                    obj[index] = reactive(item)
                }
            })

        }else{
            for (const key in obj) {
                let item = obj[key];
                if (typeof item === 'object') {
                    obj[key] = reactive(item)
                    
                }
            }
        }

        return new Proxy(obj ,{
            get(obj , key){
                return obj[key];
            },
            set(obj , key, value){
                obj[key] = value;
                console.log('页面更新');
                return true;

            }
        })
    }else{
        console.warn(`${obj} is not object`);
    }

    
}

let a = reactive(obj)

// a.link = 1;
// console.table(a);