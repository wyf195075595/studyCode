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
  .list{
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #848484;
    margin: 10px auto;
  }
  .list span{
    margin: 0 5px;
  }
  .imgwarp{
    width:90%;
    margin:0 auto;
    height: 100%;
  }
  .pic{
    width: 100%;
    height: auto;
  }
  .contents{
    width: 90%;
    margin: 20px auto;
    font-size: 18px;
    color: #333;
    line-height: 30px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pre,.next{
    display: inline-block;
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
    padding: 7px 18px;
    cursor: pointer;
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
    margin-right: 2%;
    overflow: hidden;
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
    <div class="article" v-if="articleInfo.time">
      <!-- 标题 -->
        <h1> {{articleInfo.title}}</h1>
        <!-- 数据 -->
        <div class="list">
          <span class=" hover" ><i class="iconfont icon-calendar"></i> {{timeformat(articleInfo.time)}}</span>  
          <span class=" hover" ><i class="iconfont icon-pinglun"></i>{{articleInfo.comments.length}}条评论</span>   
          <span  class="hover"><i class="iconfont icon-yanjing"></i>{{articleInfo.views}}次阅读</span>   
          <span  class="hover"><i class="iconfont icon-dianzan"></i>{{articleInfo.thumbs}}人点赞</span> 
        </div>
        <!-- 图片 www.qdtalk.com/wp-content/uploads/2020/02/timg_1582271630813.jpeg-->
        <div class="imgwarp">
          <!-- <img class="pic" :src="'http://localhost:4000/uploadImg/'+articleInfo.picUrl" alt=""> -->
        </div>
        <!-- 内容 -->
        <div class="contents" v-html="articleInfo.content"></div>
        <!-- 点赞按钮 -->
        <div class="btwarp">
          <span class="btn" @click="great"><i class="iconfont icon-dianzan"></i>点赞</span>
        </div>
        <!-- 类型 -->
        <div class="types">
          <span class="type">{{articleInfo.tag}}<i class="sjx"></i></span>
        </div>
    </div>
    <!-- 上下篇 -->
    <div class="btnswarp">
      <span class="pre" @click="pre" :title="articleList[prepage]?articleList[prepage].title:null">上一篇</span>
      <span class="next" @click="next"  :title="articleList[nextpage]?articleList[nextpage].title:null">下一篇</span>
    </div>
    <!-- 评论区 -->
    <div class="commentwarp" v-if="articleInfo.comments">
      <!-- 评论列表 -->
      <div class="comments"  v-for="(item,index) in articleInfo.comments" :key="index">
          <div class="userinfo">
            <div class="avatar"><img src="@/assets/images/pt1.jpg" alt=""></div>
            <div class="info">
              <p class="uname">{{item.name}}</p>
              <p class="times">{{timeformat(item.time)}}</p>
            </div>
          </div>
          <div class="contents"  v-html="formatemot(item.content)"></div>
          <div class="returnwarp"><a href="#hf"><span class="return">回复</span></a></div>
      </div>
    </div>
    <!-- 发表评论 -->
    <div class="public">
      <h4>发表评论</h4>
      <p class="tip">电子邮件地址不会被公开。 昵称和邮箱为必填项</p>
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
        <el-input placeholder="昵称(大于2个字符)" v-model="username">
          <template slot="prepend"><span class="el-icon-user-solid"></span></template>
        </el-input>
      </div>
      <div class="inpwarp">
        <el-input placeholder="邮箱" type='email' v-model="email">
          <template slot="prepend"><span class="iconfont icon-youxiang"></span></template>
        </el-input>
      </div>
       <div class="inpwarp">
        <el-input placeholder="网站(www.xxx.com)" type='url' v-model="website">
          <template slot="prepend"><span class="el-icon-link"></span></template>
        </el-input>
      </div>
      <div class="sub" id="hf" @click="sub">发表评论</div>
    </div>
</div>
</template>
<script>
import tools from '@/utils/tools.js'

export default {
    data(){
      return{
        articleList:[],
        index:1,
        nextpage:2,
        prepage:0,
        content:'',
        username:'',
        website:'',
        email:'',
        aid:'',
        articleInfo:'',
        status:1,
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
    watch:{
      index:function(val){
        console.log("index:",val,"length:",this.articleList.length)
        if(val >0 && val< this.articleList.length-1){
          this.prepage = val -1
          this.nextpage = val + 1
        }else if(val == this.articleList.length -1){
          this.nextpage = 0
          this.prepage = this.articleList.length -2
        }else if(val == 0){
          this.prepage = this.articleList.length -1
          this.nextpage = 1
        }
      }
    },
    mounted(){
      // console.log(this.$route.query.id)
      if(this.$route.query.id){
        this.aid = this.$route.query.id
        this.getInfo(this.aid)
      }
      // 刷新进入时立即将sessionStorage数据更新至store ，防止二次刷新数据覆盖为空
      if(JSON.parse(sessionStorage.getItem('articleList'))){
        this.$store.commit('initarticle',JSON.parse(sessionStorage.getItem('articleList')))
      }
      this.articleList = this.$store.state.artcleList.length>0?this.$store.state.artcleList:JSON.parse(sessionStorage.getItem('articleList'))
      console.log("刷新之后",this.articleList)
      //234
      this.articleList.forEach((item,index) => {
        if(item._id == this.aid){
          this.index = index
        }
      });
      console.log("位置:",this.index)
      // 表情抖动
            setInterval(() => {
            tools.shake('emot')
          }, 2500);

    },
    methods:{
      pre(){
        console.log("pre",this.index)
        if(this.index > 0){
          this.index -=1
          this.getInfo(this.articleList[this.index]._id)
        }else {
          this.index = this.articleList.length-1
          this.getInfo(this.articleList[this.index]._id)
        }
      },
      next(){
        if(this.index < this.articleList.length-1){
          this.index +=1
          this.getInfo(this.articleList[this.index]._id)
        }else{
          this.index = 0
          this.getInfo(this.articleList[this.index]._id)
        }
      },
      timeformat(t){
        return tools.timeFormat(t)
      },
      // 点赞
      great(){
        var aid = this.aid;
        var localUser = JSON.parse(localStorage.getItem("blogInfo"));
        var uid = null
        if(localUser){
          uid = localUser._id
        }
        var status = this.status;//赋值
        this.status = status?0:1;//更新

        if(!uid){
          this.$message('请先登陆！')
          setTimeout(()=>{
            this.$router.push('/login')
          },1500)
        }else{
          // console.log(status)
          this.$axios.post('/great',{aid,uid,status}).then(res=>{
            if(res.data.status == 'success'){
              this.getInfo(aid)
              this.$message({message:res.data.msg,duration:1500,type:'success'})
            }else{
              this.$message.error(res.data.msg)
            }
          })
        }
      },
      // 发送评论
      sub(){
        if(this.username.trim()&&this.content.trim()&&this.email.trim()&&this.aid){
          var reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,"ig")
          if(this.username.length<2){
            this.$message('用户名格式不符')
          }else if(!reg.test(this.email)){
            this.$message('邮箱格式不符')
          }else{
             var info = {
              aid:this.aid,
              content:this.content,
              time:Date.now(),
              name:this.username,
              email:this.email,
              website:this.website
            }
            this.$axios.post('/addComments',info).then(res=>{
                // console.log(res.data)
                if(res.data.status == 'success'){
                  this.$message({message:res.data.msg,type:'success',duration:2000})
                  this.getInfo(this.aid)
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
      },
      // 获取详情
      getInfo(id){
        if(id){
          this.$axios.post('/getinfo',{aid:id}).then(res=>{
            // console.log(res.data)
            if(res.data.status == 'success'){
              this.articleInfo = res.data.data
              // console.log(this.articleInfo)
            }else{
              this.$message.error('获取详情错误')
            }
          })
        }
      },
       //  选择表情
      chooseOwO(e){
          console.log(e.target.title)
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
    }
}
</script>