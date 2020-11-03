export const showLoadingPlugin = function(vm:any){
    const loadingComponent = vm.extend({
      template:`<div id="loading-wrapper">{{msg}}</div>`,
      props:{
        msg:{
          type:String,
          default:'loading...'
        }
      }
    })
  
    function loading(msg:string){
      const div = document.createElement('div');
      div.setAttribute('id','loading-wrapper');
      document.body.append(div);
      new loadingComponent({
        props:{
          msg:{
            type:String,
            default:msg
          }
        }
      }).$mount('#loading-wrapper')
      return ()=>{
        const childNode:any = document.getElementById('loading-wrapper');
        document.body.removeChild(childNode)
      }
    }
    vm.prototype.$loadings = loading
}
// export default showLoadingPlugin;
    
