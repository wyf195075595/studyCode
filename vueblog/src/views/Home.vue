<style scoped>

  .middle{
    /* position: relative; */
    width: 80%;
    margin: 20px auto;
    min-height: 300px;
    height: 100%;
    /* background: cyan; */
    /* display: flex; */
  }

  /* 左边列表 */
  .leftside{
    width: 67%;
    height: auto;
    float: left;
    /* overflow: hidden; */
  }
  
/* 右边列表 */
  .rightside{
    margin-left:3%;
    width: 30%;
    height: auto;
    float: right;
    /* overflow: hidden; */
    max-width: 360px;
  }

/* 底部 */
  .footer{
    height: 110px;
    background: #484848;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    clear: both;
  }
</style>
<template>
  <div class="home">
    <!-- 头部 -->
      <Head/>
    <!-- 中间内容 -->
    <div class="middle">
      <!-- 左边 -->
      <div class="leftside" id="main">
        <!-- 文章列表 -->
          <router-view/>
      </div>
      <!-- 右边 -->
      <div class="rightside">
        <RightSide/>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footer" id="footer">
        <p>COPYRIGHT 2020 白小纯. ALL RIGHTS RESERVED.</p>
        <p>京ICP备16036924号</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RightSide from '@/components/front/RightSide.vue'
import Head from '@/components/front/Head.vue'

export default {
  data(){
    return{
     
    }
  },
  methods:{
    
  },
  mounted(){
    // 文字鼠标移入移出
    $('.hover').hover(function(){
      $(this).css({color:'#00a2ff',transition: '.5s'})
    },function(){
      $(this).css({color:'#333',transition: '.5s'})
    })
    // 菜单移入移出
    $('.menu').hover(function(){
      $(this).css({ transform:'scale(1.2)',transition: '.5s'})
      },function(){
      $(this).css({transform:'scale(1)',transition: '.5s'})
    })
    // 滑动效果
    $(window).scroll(function(){
      var x = $('.leftside').outerHeight()
      var y = $('.rightside').outerHeight()
      //  console.log( $(this).scrollTop())
      //  console.log( x,y)
      if(x-y>0){
        if(+$(this).scrollTop()-300>+(x-y)){
          // console.log('下去')
           $('.rightside').css({position:'fixed',top:'',bottom:'110px',left:'63%'})
         }else  if($(this).scrollTop()>=300){
          // console.log('上去')
           $('.rightside').css({position:'fixed',top:'0',left:'63%',bottom:''})
         } else{
          // console.log('消失')
           $('.rightside').css({position:'',top:'',left:'',bottom:''})
         }
      }else{
        $('.rightside').css({position:'',top:'',left:'',bottom:''})
      }
   
    })
    
  },
  components: {
    RightSide,
    Head
  }
}
</script>
