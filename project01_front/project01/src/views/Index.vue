<template>
  <div class="index">
      <div class="container">
        <Card  :carList = 'carList' @click = "cardClick">
          <p slot="0"><i class="el-icon-s-promotion icons"></i></p>
          <p slot="1"><i class="el-icon-monitor icons"></i></p>
          <p slot="2"><i class="el-icon-headset icons"></i></p>
        </Card>
        <!-- <Loading /> -->
        <div class="videoBox" v-loading="flag">
          <video src="../assets/video/VID_20200515_155925.mp4" autoplay muted loop></video>
          <div class="box">
            <div>
              <span><video src="../assets/video/VID_20200515_155925.mp4" autoplay muted loop></video></span>
              <span><video src="../assets/video/VID_20200515_155925.mp4" autoplay muted loop></video></span>
              <span><video src="../assets/video/VID_20200515_155925.mp4" autoplay muted loop></video></span>
            </div>
          </div>
          
        </div>
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
          const div:any = document.createElement('div')
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
  flag:boolean = true;
  cardClick(e:MouseEvent){
    let hide = this.$loadings('2000 Years Later...')
    setTimeout(()=>{
      hide()
    },3e3)
  }
  private clickMe(){
    console.log();
    // let hide = this.$loadings('xxx')
    // setTimeout(()=>{
    //   hide()
    // },2000)
  }
  mounted(){
    // this.flag = !this.flag
    // const bt:any = document.getElementById('btn');
    // bt.focus()
    // var routes:any = [];
    setTimeout(()=>{
      this.flag = !this.flag;
    },2e3)
    Vue.nextTick(()=>{
      // bt.focus()
      // console.log(this.$route);
      
    })
    
    setTimeout(()=>{
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
    },500)
    
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
    .videoBox{
      width: 100%;
      height:calc(100% - 400px) ;
      background: rgba(0,0,0,0.3);
      position: relative;
      video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(10px);
      }
      .box{
        position: absolute;
        top: calc(50% - 120px);
        left: calc(50% - 110px);
        height: 220px;
        width: 220px;
        transform-style: preserve-3d;
        >div{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(25deg) translate3d(-75px,-50px,150px);
          >span{
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid rgba(0,0,0,0.1);
            background: #ccc;
            video{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: blur(0px);
              
            }
            &:nth-child(1){
              transform: rotateX(0deg) translate3d(0,0,110px);
            }
            &:nth-child(2){
              transform: rotateY(90deg) translate3d(0,0,-110px);
              video{
                transform: rotateY(180deg);
              }
            }
            &:nth-child(3){
              transform: rotateX(90deg) translate3d(0,0,110px);
            }
          }
        }
      }
    }
  }
}
</style>