import Vue from 'vue'
import Dialog from './Dialog-common.vue'
// 1
// vue.extend() 生成组件的构造函数
const DialogBox = Vue.extend(Dialog)
console.log('弹窗对象：',Dialog);
Dialog.install = function (data){
    let instance = new DialogBox({
        data
    }).$mount()
    console.log('instance',instance);
    document.body.appendChild(instance.$el)
    // Vue.nextTick(()=>{
    //     instance.outerVisible = true
    // })
}

export default Dialog