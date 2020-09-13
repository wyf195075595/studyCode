<template>
  <div class="index">
      <div class="container">
        <Card  :carList = 'carList' @click = "cardClick">
          <p slot="0"><i class="el-icon-s-promotion icons"></i></p>
          <p slot="1"><i class="el-icon-monitor icons"></i></p>
          <p slot="2"><i class="el-icon-headset icons"></i></p>
        </Card>
        <input type="text" id="btn" @click="clickMe" v-show = 'flag' />
        <!-- <Loading /> -->
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/card/Card.vue'

// loadiing指令
Vue.directive('loading',{
  update(el,binding,vnode){
      console.log(el,binding,vnode);
      if(binding.value){
          const div = document.createElement('div')
          div.innerText = 'Loading...'
          div.style.fontSize = '4em'
          div.setAttribute('id','loading')
          div.style.position = 'fixed'
          div.style.zIndex = '99'
          div.style.left = '0';
          div.style.top = '0';
          div.style.width = '100%'
          div.style.height = '100%'
          div.style.display = 'flex'
          div.style.justifyContent = 'center'
          div.style.alignItems = 'center'
          div.style.color = '#fff'
          div.style.background = 'rgba(0,0,0,0.7)'
          document.body.append(div)
      }else{
        var dom = document.getElementById('loading')
        dom&&document.body.removeChild(dom)
      }
  }
})

@Component({
  components: {
    Card
  },
})

export default class Index extends Vue {
  carList:Array<object> = [];
  flag:boolean = false;
  cardClick(e:MouseEvent){
    console.log(e);
  }
  private clickMe(){
    console.log(this.$loadings);
    let hide = this.$loadings('xxx')
    setTimeout(()=>{
      hide()
    },2000)
  }
  mounted(){
    this.flag = !this.flag
    const bt:any = document.getElementById('btn');
    // bt.focus()
    Vue.nextTick(()=>{
      bt.focus()
      console.log(this.flag);
    })
    
    
    this.carList  = [
      {
        title:'设计',
        content:`与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
         在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。`
      },
      {
        title:'编程',
        content:`与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
         在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。`
      },
      {
        title:'生活',
        content:`与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
         在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。`
      }
    ]
  }
}
</script>
<style lang="less" scoped>
.index{
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
    background: #ccc;
    margin: 0 auto;
    padding-top: 80px;
    overflow: hidden;
    
  }
}
</style>