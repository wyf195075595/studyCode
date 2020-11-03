import MyLoading from './Loading.vue'

// MyLoading.install = (Vue)=>{
//     Vue.component('Loading',MyLoading);
// }

const Loading = {
    install:function(Vue:any){
        Vue.component('Loading',MyLoading);
    }
}

export default Loading;
