<style  scoped>
.container{
  width:293.31px;
  height: auto;
}
  .rtop{
    display: block;
    text-align: center;
    font-size: 16px;
    color: #848484;
  }
  .btns{
    height: 65px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .login,.sign{
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    display: inline-block;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    margin:20px 5px ;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 3px;
  }
  .rboxwarp{
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0 0 25px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
    box-shadow:  1px 1px 2px rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }
  /* 邮箱订阅 */
  .emailtitle{
    font-size: 18px;
    display: inline-block;
    padding-bottom:10px ;
    border-bottom:2px solid #00a2ff ;
  }
  .emailwarp input{
    width: 210px;
    height:35px;
    border: 1px solid #848484;
    margin-bottom: 20px;
    text-indent: 5px;
  }
  .emailtip{
    font-size: 16px;
    color: #848484;
    padding: 0 8px 16px 0;
    box-sizing: border-box;
  }
  .title1{
    font-size: 16px;
    color: #848484;
    margin-bottom: 5px;
  }
  .sub{
    color: #333;
    width: 56px;
    display: block;
    margin-top: 0;
  }
  .inp{
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 0;
    width: 80%;
    background: #e8f0fe;
  }
  .inp input{
    font-size: 18px;
    border: 0;
    outline: 0;
    line-height: 34px;
    width: 100%;
    color: #999;
    padding-left: 5px;
    box-sizing: border-box;
  }
  input:focus{
    /* outline: 3px outset #2CA8FF; */
    box-shadow: 1px 1px 5px #2CA8FF,-1px -1px 5px #2CA8FF;
    /* border-style: ; */
  }
  .commentList li{
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    margin-bottom: 10px;
  }
  .commentList i{
    margin-right:4px;
  }

  .pages{
    margin:  0 auto;
  }
  .link{
    cursor: pointer;
  }
</style>
<template>
    <div class="container" id='sidebar'>
        <!-- 注册，登陆 -->
        <div class="rtop" v-if="!info">
          <div class="tip">用户您好！请先登录！</div>
          <div class="btns">
            <div class="login hover" @click="tologin">登陆</div>
            <div class="sign hover" @click="tosign">注册</div>
          </div>
        </div>
        <!-- 登陆成功 -->
        <div class="rtop" v-else >
          <div class="tip">{{info}}您好！</div>
          <div class="btns">
            <div class="login hover" @click="mine">个人中心</div>
            <div class="sign hover" @click="signOut">退出</div> 
          </div>
        </div>
        <!-- 邮件订阅 -->
        <div class="rboxwarp">
            <h4 class="emailtitle">邮箱订阅</h4>
            <div class="emailwarp">
                <p class="emailtip">订阅后，您会实时收到我的更新信息</p>
                <p class="title1">您的昵称</p>
                <input type="text" >
                <p class="title1">您的邮箱地址*</p>
                <input type="email" required>
                <div class="sub login hover">提交</div>
            </div>
        </div>
        <!-- 音乐播放 -->
        <div class="rboxwarp">
          <h4 class="emailtitle">音乐播放</h4>
          <!-- <video src=""></video> -->
        </div>
        <!-- 站内搜索 -->
        <div class="rboxwarp">
          <h4 class="emailtitle">站内搜索</h4>
          <div class="inp">
            <input type="text" placeholder="search keyword">
          </div>
          
        </div>
         <!-- 近期评论 -->
        <div class="rboxwarp">
          <h4 class="emailtitle">近期评论</h4>
          <ul class="commentList" v-if="comments">
            <li class="link" v-for="(item,index) in comments " :key="index" @click="toInfo(item.aid._id)"><i class="iconfont icon-pinglun"></i>{{item.name}}在《{{item.aid.title}}》发表了评论</li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        info:JSON.parse(localStorage.getItem('blogInfo'))?JSON.parse(localStorage.getItem('blogInfo')).name:'',
        comments:[]
      }
    },
    mounted(){
      this.getComments()
    },
    methods:{
        toInfo(id){
        this.$router.replace({
          path:'/home/info',
          query:{id}
        })
        if(this.$route.path.indexOf('info')!=-1){
          location.reload()
        }
      },
      getComments(){
        this.$axios.post('/getComments').then(res=>{
          if(res.data.status == 'success'){
            console.log(res.data)
            this.comments = res.data.data;
          }
          
        })
      },
      tologin(){
        this.$router.push('/login')
      },
      tosign(){
        this.$router.push('/sign')
      },
      mine(){
        // console.log(JSON.parse(localStorage.getItem('blogInfo')).name)
        this.$message('此功能暂未开放');
      },
      signOut(){
        this.$message({message:'退出成功',type:"success"});
        localStorage.removeItem('blogInfo');
        setTimeout(() => {
            this.$router.push('/login')
        }, 2000);
      }
    }
}
</script>