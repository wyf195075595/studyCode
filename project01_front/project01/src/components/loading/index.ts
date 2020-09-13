import MyLoading from './Loading.vue'

const Loading = {
    install:function(Vue:any){
        Vue.component('Loading',MyLoading);
    }
}

export default Loading;
