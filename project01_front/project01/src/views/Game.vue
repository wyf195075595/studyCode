<template>
  <div class="game">
      <div class="container">
        我是游戏页面
        <!-- <input type="text" v-model="text"> -->
        <button @click="changeText1">444</button>

        <keep-alive>  
          <component :is="currentView" v-model="text" @alerttest = 'alerttest' @event1 = 'event1'>   
             <!-- 非活动组件将被缓存！ -->  
          </component>
        </keep-alive>
 

        <!-- <Eidt  v-model="text" />  -->
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Eidt from '@/components/editTest/editTest.vue';
import mixins from '@/components/plugins/mixins'
// 注册
Vue.component('my-component1', {  template: '<div>A custom component1!</div>'})
Vue.component('my-component2', {  
  template: `<div @click = 'sss'>A custom component2!</div>`,
  mixins:[mixins],
  methods:{
    sss(){
      console.log('sssss',this);
      this.$emit('alerttest')
    }
  }
  })

@Component({
  components: {
    Eidt
  }
})

export default class Game extends Vue {
  private text:string = '';
  private tt:string = 'qqq';
  private currentView:string = 'my-component1';
  changeText1(){
    // this.text += '1';
    if(this.currentView == 'my-component2'){
     this.currentView = 'Eidt';
    }else{
      this.currentView = 'my-component2';
    }
    Vue.nextTick(()=>{
      console.log(this.$el.textContent);
    })
    
  }
  event1(params:any){
    console.log('返回',params);
    
  }
  alerttest(){
    alert('000')
  }

  mounted(){
    console.log(this.$router);
    Vue.nextTick(()=>{
      
    })
  }
  // beforeRouteEnter(to , from ,next){
  //   next(
  //     // vm=>{
  //     //   console.log('路由',vm.$route);
  //     //   if(vm.$route.meta == 'admin'){
  //     //     console.log('可以进去');
          
  //     //   }else{
  //     //     console.log('不能进去');
  //     //     vm.$router.push({path:'/index'})
  //     //   }
  //     // }
  //   )
  // }
}
</script>
<style lang="less" scoped>
.game{
  width: 100%;
//   flex: auto;
  // height: 86vh;
  height: calc(100vh - 120px);
  overflow-y: auto;
  &::-webkit-scrollbar{
      width: 0;
  }
  .container{
    width: 70%;
    min-width: 1200px ;
    height: 100%;
    // background: #sky;
    margin: 0 auto;
    padding-top: 80px;
    overflow: hidden;
    flex-direction: column;
  }
}
</style>