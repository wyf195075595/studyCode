<template>
<div>
  <h1>{{ value }}</h1>
  <form >
    name:<input v-model="state2.newStu.name" type="text">
    age:<input v-model="state2.newStu.age" type="text">
    id:<input v-model="state2.newStu.id" type="text">
    <button type="submit" ref="addBtn" @click.prevent="add">新增</button>
  </form>
  <ul>
    <li v-for="item in state.stuList" :key="item.id" @click="delStu(item.id)">{{item.name}}-----{{item.age}}</li>
  </ul>
  <hr>
  <h2>{{num}}</h2>
  <button @click="num +=1" ref="btn">+1</button>
</div>
</template>

<script>
import {onMounted , onBeforeMount , onUpdated ,onBeforeUpdate , ref , reactive, watchEffect ,isReactive ,isRef,shallowReactive ,shallowRef ,triggerRef ,markRaw ,customRef, readonly} from 'vue'

// 自定义ref
function myRef(value){
  return customRef((track,trigger)=>{
    return {
      get(){
        track();//告诉Vue这个数据需要追踪变化
        return value;
      },
      set(newVal){
        value = newVal;
        trigger();//触发页面更新
      }
    }
  })
}

export default {
  name: 'HelloWorld',
  data(){
    return{
      num:myRef(18)
    }
  },

  computed:{
    
  },
  
  mounted(){
    this.$nextTick(()=>{
      
    })
    

  },
  //beforeCreated-setup-created 
  setup(props,ctx){
    console.log(props.msg,ctx);
    let count = ref(0);
    let {state,delStu} = userRemoveStu();
    let {state2,add} = userAddStu(state);
    // 判断数据是否 ref/reactive 类型
    //  isRef（）/isReactive（） 返回 Boolean

    // 非递归监听 shallowRef /shallowReactive

    // 非递归监听主动触发界面更新
    // triggerRef（）

    // toRaw() 传入proxy包装的响应式数据，返回原始数据。操作原始数据不会更新页面
    // 注意：ref 类型数据传入时需 .value 才能返回原始数据

    // markRaw() 传入原始数据，后此原始数据被包装为响应式数据后也无法触发更新页面，禁止此数据响应更新页面

    // toRef / ref 区别
    // let  obj =  {name:'xxx',age:18}
    // let state1 = toRef(obj,'name')
    // let state2 = toRef(obj,'name')
    // state1.value = 'zs 
    // 如果利用ref将对象的某一个属性变成响应式数据
    // 我们修改响应式数据不会影响原始数据

    // state2.value = 'zs
    // 如果利用toRef将对象的某一个属性变成响应式数据
    // 我们修改响应式数据会影响原始数据
    // 但是如果响应式的数据是通过toRef创建的，那么修改了数据并不会触发ui界面更新

    // toRefs
    // 将对象的多个属性变成响应式数据
    //let state3 = toRefs(obj)
    // state3.name.value = 'zs'

    // readonly:用于创建一个只读的数据，并且是递归只读
    // shallowReadonly:用于创建一个只读的数据，并且不是递归只读，只是第一层只读其他层可修改
    // isReadonly:判断数据是否为只读，返回Boolean
    // 获取元素
    let btn = ref(null);
    let addBtn = ref(null);


    // 页面挂载前
    onBeforeMount(()=>{
      console.log('onBeforeMount');
    })
    // 页面挂载后
    onMounted(()=>{
      console.log('onMounted',this);
      console.log('按钮：',btn.value,addBtn.value);
    })
    // 页面更新前
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate');
    })
    // 页面更新后
    onUpdated(()=>{
      console.log('onUpdated');
    })
    watchEffect(()=>{
      console.log('name is:' + count.value);
      console.log('this',this);
    })
    return {
      count
      ,state
      ,delStu
      ,state2
      ,add
      ,btn
      ,addBtn
      // ,num:myRef(18)
    }
  }

}

 function userRemoveStu(){
    let state = reactive({
      stuList:[
        {
          name:'zs',
          age:'10',
          id:1
        },
        {
          name:'ls',
          age:'20',
          id:2
        },
        {
          name:'ww',
          age:'30',
          id:3
        }
      ]
    })
    
    function delStu(i){
      state.stuList = state.stuList.filter(ele => i != ele.id )
    }

    return {
      state,
      delStu
    }
  }
  
function  userAddStu(state){
    let state2 = reactive({
          newStu : {
            name:'',
            age:'',
            id:''
          }
      })

 
    function add(){
      let stu = Object.assign({},state2.newStu)
      state.stuList.push(stu)
    }
    return {state2,add}
  }
    
</script>
