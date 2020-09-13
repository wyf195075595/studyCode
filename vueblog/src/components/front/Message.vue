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
  .imgwarp{
    width:90%;
    margin:1em auto;
    height: 100%;
  }
  .pic{
    width: 100%;
    height: auto;
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
  .type{
    position: relative;
    display: inline-block;
    padding: 4px 6px 3px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    vertical-align: baseline;
    white-space: nowrap;
    background-color: #aaa;
    margin-right: 5px;
    top: -2px;
    border-radius: 0;
    color: #333;
    font-weight: 400;
  }
  .sjx{
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: top;
    content: "";
    top: 6px;
    right: -4px;
    border-left: 4px solid #aaa;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  .btnswarp{
    padding: 20px 0;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .commentwarp,.public{
    padding: 20px 20px 15px 20px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
    background-color: #fff;
    margin-bottom: 15px;
  }
  .userinfo{
    height: 60px;
    display: flex;
  }
  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: cornflowerblue;
    margin-right: 2%;
  }
  .avatar img{
     width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .uname{
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  .times{
    font-size: 12px;
    color: #848484;
  }
  .contents{
    font-size: 16px;
    color: #333;
    margin:10px;
  }
  .return{
    padding: 5px;
    padding: .2em .5em .3em;
    background-color: #999;
    color: #fff;
    font-size: 11px;
    -webkit-transition: all .4s;
    transition: all .4s;
  }
  .return:hover{
    background-color: #333;
  }
  .returnwarp{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .public h4{
    color: #333;
    font-weight: 400;
    margin: 10px 0 60px 10px;
    font-size: 18px;
  }
  .tip{
    font-size:16px;
    color: white;
    background: #333;
    display: inline-block;
    margin: 10px 0;
  }
  .inpwarp{
    margin: 20px 0;
  }
  .sub{
    width: 100%;
    background: #00a2ff;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .sub:hover{
    transition: all .5s;
    background: #3e8cd1;
  }
  .title1{
     font-size:16px;
     color:#666;
     margin-bottom: 1em;
  }
  .emot{
    line-height: 25px;
    text-align:center;
    font-size:12px;
    margin:10px;
    width:100px;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
    color:#999;
  }
  .OwO{
    width: 100%;
    height:120px;
    background: goldenrod;
    overflow-y: scroll;
  }
  .OwO li{
    display: inline-block;
    width: 35px;
    height: 35px;
    margin: 5px;

  }
  .OwO li img{
    width: 100%;
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all  .5s;
  }
  .fade-enter, .fade-leave-to{
    height: 0px;
    opacity: 0;
  }
</style>
<template>
<div class="container">
    <div class="article">
      <!-- 标题 -->
        <h1>留言</h1>
        <!-- title -->
         <p class='title1'>短暂的瞬间，漫长的永远。</p>
        <!-- 图片 -->
        <div class="imgwarp">
          <img class="pic" src="https://www.qdtalk.com/wp-content/uploads/2018/11/message-1.jpg" alt="">
        </div>
        <!-- 点赞按钮 -->
        <div class="btwarp">
          <span class="btn"><i class="iconfont icon-dianzan"></i>点赞</span>
        </div>
        <!-- 类型 -->
        <div class="types">
          <span class="type">随笔<i class="sjx"></i></span>
        </div>
    </div>
    <!-- 分页 -->
    <div class="btnswarp">
      <el-pagination @current-change="handleCurrentChange" :page-size="5" layout=" prev, pager, next" background :total="pages"></el-pagination>
    </div>
    <!-- 评论区 -->
    <div class="commentwarp">
      <!-- 评论列表 -->
      <div class="comments" v-for="(item,index) in messages" :key="index">
          <div class="userinfo">
            <div class="avatar"><img src="@/assets/images/pt1.jpg" alt=""></div>
            <div class="info">
              <p class="uname">{{item.name}}</p>
              <p class="times" >{{timeformat(item.time)}}</p>
            </div>
          </div>
          <div class="contents" v-html="formatemot(item.content)"></div>
          <div class="returnwarp"><a href="#hf"><span class="return">回复</span></a></div>
      </div>
    </div>
    <!-- 发表评论 -->
    <div class="public">
      <h4>发表评论</h4>
      <p class="tip">电子邮件地址不会被公开。 昵称、邮箱必填项</p>
      <div class="inpwarp">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="content">
        </el-input>
      </div>
      <div class="emot" @click="isShow=!isShow" id="emot">OwO表情</div> 
      <!-- 表情弹窗 -->
      <transition name="fade">
      <div class="OwO"  v-if="isShow">
        <ul>
          <li v-for="(item,index) in OwOlist" :key="index" @click="chooseOwO"><img :src="require('@/assets/images/emot/'+item.url)" :title="item.title" ></li>
        </ul>
      </div>
      </transition>
      <div class="inpwarp">
        <el-input placeholder="昵称" v-model="username">
          <template slot="prepend"><span class="el-icon-user-solid"></span></template>
        </el-input>
      </div>
      <div class="inpwarp">
        <el-input placeholder="邮箱" v-model="email">
          <template slot="prepend"><span class="iconfont icon-youxiang"></span></template>
        </el-input>
      </div>
       <div class="inpwarp">
        <el-input placeholder="网站" v-model="website">
          <template slot="prepend"><span class="el-icon-link"></span></template>
        </el-input>
      </div>
      <div class="sub" @click="sub"  id="hf">发表评论</div>
    </div>
</div>
</template>
<script>
import tools from '@/utils/tools.js'
export default {
   data(){
      return{
        content:'',
        username:'',
        website:'',
        email:'',
        pages:5,
        messages:[],
        OwOlist:[//表情包和表情路径
             {'title':'微笑','url':'weixiao.gif'},
            {'title':'嘻嘻','url':'xixi.gif'},
            {'title':'哈哈','url':'haha.gif'},
            {'title':'可爱','url':'keai.gif'},
            {'title':'可怜','url':'kelian.gif'},
            {'title':'挖鼻','url':'wabi.gif'},
            {'title':'吃惊','url':'chijing.gif'},
            {'title':'害羞','url':'haixiu.gif'},
            {'title':'挤眼','url':'jiyan.gif'},
            {'title':'闭嘴','url':'bizui.gif'},
            {'title':'鄙视','url':'bishi.gif'},
            {'title':'爱你','url':'aini.gif'},
            {'title':'泪','url':'lei.gif'},
            {'title':'偷笑','url':'touxiao.gif'},
            {'title':'亲亲','url':'qinqin.gif'},
            {'title':'生病','url':'shengbing.gif'},
            {'title':'太开心','url':'taikaixin.gif'},
            {'title':'白眼','url':'baiyan.gif'},
            {'title':'右哼哼','url':'youhengheng.gif'},
            {'title':'左哼哼','url':'zuohengheng.gif'},
            {'title':'嘘','url':'xu.gif'},
            {'title':'衰','url':'shuai.gif'},
            {'title':'吐','url':'tu.gif'},
            {'title':'哈欠','url':'haqian.gif'},
            {'title':'抱抱','url':'baobao.gif'},
            {'title':'怒','url':'nu.gif'},
            {'title':'疑问','url':'yiwen.gif'},
            {'title':'馋嘴','url':'chanzui.gif'},
            {'title':'拜拜','url':'baibai.gif'},
            {'title':'思考','url':'sikao.gif'},
            {'title':'汗','url':'han.gif'},
            {'title':'困','url':'kun.gif'},
            {'title':'睡','url':'shui.gif'},
            {'title':'钱','url':'qian.gif'},
            {'title':'失望','url':'shiwang.gif'},
            {'title':'酷','url':'ku.gif'},
            {'title':'色','url':'se.gif'},
            {'title':'哼','url':'heng.gif'},
            {'title':'鼓掌','url':'guzhang.gif'},
            {'title':'晕','url':'yun.gif'},
            {'title':'悲伤','url':'beishang.gif'},
            {'title':'抓狂','url':'zhuakuang.gif'},
            {'title':'黑线','url':'heixian.gif'},
            {'title':'阴险','url':'yinxian.gif'},
            {'title':'怒骂','url':'numa.gif'},
            {'title':'互粉','url':'hufen.gif'},
            {'title':'书呆子','url':'shudaizi.gif'},
            {'title':'愤怒','url':'fennu.gif'},
            {'title':'感冒','url':'ganmao.gif'},
            {'title':'心','url':'xin.gif'},
            {'title':'伤心','url':'shangxin.gif'},
            {'title':'猪','url':'zhu.gif'},
            {'title':'熊猫','url':'xiongmao.gif'},
            {'title':'兔子','url':'tuzi.gif'},
            {'title':'喔克','url':'ok.gif'},
            {'title':'耶','url':'ye.gif'},
            {'title':'棒棒','url':'good.gif'},
            {'title':'不','url':'no.gif'},
            {'title':'赞','url':'zan.gif'},
            {'title':'来','url':'lai.gif'},
            {'title':'弱','url':'ruo.gif'},
            {'title':'草泥马','url':'caonima.gif'},
            {'title':'神马','url':'shenma.gif'},
            {'title':'囧','url':'jiong.gif'},
             {'title':'浮云','url':'fuyun.gif'},
            {'title':'给力','url':'geili.gif'},
            {'title':'围观','url':'weiguan.gif'},
            {'title':'威武','url':'weiwu.gif'},
            {'title':'话筒','url':'huatong.gif'},
            {'title':'蜡烛','url':'lazhu.gif'},
            {'title':'蛋糕','url':'dangao.gif'},
            {'title':'发红包','url':'fahongbao.gif'}
        ],
        isShow:false
      }
   },
   mounted(){
     this.getMessage()
     setInterval(() => {
       tools.shake('emot')
     }, 2500);
    
   },
   methods:{
    //  格式化时间
     timeformat(t){
       return tools.timeFormat(t)
     },
    //  选择表情
      chooseOwO(e){
          // console.log(e.target.title)
          this.content +='['+e.target.title+']'
      },
      // 转化表情
      formatemot(cont){
         var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
                var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
                var content = cont.match(pattern1);
                var str = cont;
                if(content){
                    for(var i=0;i<content.length;i++){
                        for(var j=0;j<this.OwOlist.length;j++){
                            if("["+this.OwOlist[j].title +"]" == content[i]){
                                var src =this.OwOlist[j].url;
                                break;
                            }
                        }
                        str = str.replace(pattern2,'<img src="'+require("@/assets/images/emot/"+src)+'"/>');
                    }
                    // console.log(str);
                }
                return str;
      },
      // 分页
      handleCurrentChange(curpage){
        //  console.log(curpage)
         this.getMessage(curpage)
      },
      // 留言发布
      sub(){
        this.leaveMessage()
      },
      // 获取留言
      getMessage(page=1,limit=5){
        this.$axios.post('/getMessages',{page,limit}).then(res=>{
          if(res.data.status == 'success'){
            this.messages = res.data.data
            this.pages = res.data.length
          }else{
            this.$message.error(res.data.msg)
          }
        })
      },
      // 留言
      leaveMessage(){
        if(this.username.trim()&&this.content.trim()&&this.email.trim()){
          var reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,"ig")
          if(this.username.length<2){
            this.$message('用户名格式不符')
          }else if(!reg.test(this.email)){
            this.$message('邮箱格式不符')
          }else{
             var info = {
              content:this.content,
              time:Date.now(),
              name:this.username,
              email:this.email,
              website:this.website

            }
            this.$axios.post('/leaveMessage',info).then(res=>{
                // console.log(res.data)
                if(res.data.status == 'success'){
                  this.$message({message:res.data.msg,type:'success',duration:2000})
                  this.getMessage()
                  this.username = ''
                  this.email = ''
                  this.website = ''
                  this.content = ''
                }else{
                  this.$message.error(res.data.msg)
                }
            })
          }
         
        }else{
          this.$message('信息不完整')
        }
      }
   }
}
</script>