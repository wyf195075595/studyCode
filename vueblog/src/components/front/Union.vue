<style  scoped>
  .article{
    width: 100%;
    height: auto;
    /* background-color: rgb(255, 255, 255); */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
    margin: 0px 0px 15px;
    border-radius: 0px;
    padding: 30px 15px 18px;
    box-sizing: border-box;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);

  }
  h1{
    color: #333;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  .btwarp{
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    text-align: center;
  }
  .btn{
    display: inline-block;
    margin: 0 2px;
    width: 130px;
    height: 35px;
    border: 1px solid #e87461;
    border-radius: 0;
    background: #fff;
    box-shadow: none;
    color: #e87461;
    text-align: center;
    text-decoration: none;
    font-size: 14.5px;
    line-height: 34px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .btn:hover{
    transition: all .5s;
    background:#e87461 ;
    color: white;
  }
  
  .btnswarp{
    padding: 20px 0;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  ul>li,.type{
     color: #00a2ff;
     font-size:16px;
     margin:1em;
  }
  
</style>
<template>
<div class="container">
    <div class="article">
      <!-- 标题 -->
        <h1>友联</h1>
        <ul>
           <li>暂无</li>
        </ul>
        <!-- 点赞按钮 -->
        <div class="btwarp">
          <span class="btn"><i class="iconfont icon-dianzan"></i>点赞</span>
        </div>
        <!-- 类型 -->
          <p class="type">友联申请</p>
    </div>
</div>
</template>
<script>
export default {
   data(){
      return{
        
      }
   },
   methods:{
      
   }
}
</script>