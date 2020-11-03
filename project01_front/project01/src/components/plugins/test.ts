 const MyPlugin:any = {
    install : function (Vue:any, options:any) {  
        // 1. 添加全局方法或属性  
        Vue.myGlobalMethod = function () {    
             // 逻辑...  
             console.log('全局方法');
        }  
        // 2. 添加全局资源  
        Vue.directive('my-directive', {    
            bind (el:any, binding:any, vnode:any, oldVnode:any) {      
            // 逻辑...  
             console.log('指令');
    
            }
        })  
        // 3. 注入组件  
        Vue.mixin({    
            created: function () {      
            // 逻辑...  
            this.hello()
    
            } ,
            methods:{
                hello:function(){
                    console.log('hellow from mixin');
                }
            }
        })  
        // 4. 添加事例方法  
        Vue.prototype.$myMethod = function (options:any) {    
            // 逻辑...  
            console.log('事例方法');
    
    
        }
    }
}

export default MyPlugin

