<style  scoped>
    .article{
    width: 100%;
    height: auto;
    margin: 0 0 15px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    border-radius: 0;
  }
  .pic{
    width: 240px;
    height: 145px;
    padding:20px;
    overflow: hidden;
  }
  .pic img{
    width: 240px;
    height: 145px;
    border:1px solid white;
  }
  .atop{
    display: flex;
  }
  .content{
    flex: 1;
    padding: 20px;

  }
  .titleWord{
    margin: 0 4px;
    font-size: 21px;
  }
  .newtitleword{
    color: #333;
    font-size: 21px;
    text-indent: 2em;
    font-weight: 500;
    margin: 3px 0 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    max-height: 25px;
    display: none;
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
    background-color: #00a2ff;
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
    border-left: 4px solid #00a2ff;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  .abottom{
    height: 45px;
    padding: 0 10px;
    border-top: 1px solid #F3F3F3;
    border-bottom: 1px solid #F3F3F3;
    line-height: 45px;
    align-items: center;
    color: #333;
    font-size: 12px;
  }
  .abottom span{
    margin:0 10px;
  }
   .abottom span i{
    margin:0 2px;
  }
  .more{
    float: right;
  }
</style>
<template>
<div v-if="list.length>0">
    <!-- 文章列表 -->
    <div class="article" v-for="(item,index) in list" :key="index" @click="toinfo(item._id)">
        <div class="atop">
          <!-- ~@/assets/images/bz1.jpg -->
            <div class="pic"><img :src="item.picUrl.indexOf('http')==-1?'http://106.54.247.250:4000/uploadImg/'+item.picUrl:item.picUrl" alt=""></div>
            <div class="content">
                <div class="title">
                  <span class="type">{{item.tag}}<i class="sjx"></i></span>
                  <span class="titleWord hover">{{item.title}}</span>
                </div>
            </div>
        </div>
        <div class="newtitleword hover" >{{item.title}}</div>  
        <div class="abottom">
          <span class="time hover" ><i class="iconfont icon-calendar"></i> {{timeFormat(item.time)}}</span>  <span class="comment hover" ><i class="iconfont icon-pinglun"></i>{{item.comments.length}}条评论</span>   <span  class="hover"><i class="iconfont icon-yanjing"></i>{{item.views}}次阅读</span>   <span  class="hover"><i class="iconfont icon-dianzan"></i>{{item.thumbs}}点赞</span> 
          <span class="more hover" >阅读全文<i class="iconfont icon-youjiantou"></i></span>
        </div>
    </div>
    <!-- 分页 -->
     <div class="pages" >
       <el-pagination @current-change="handleCurrentChange" layout=" prev, pager, next" background :total="pages"></el-pagination>
     </div>
</div>
</template>
<script>
import tools from '@/utils/tools.js'
export default {
  data(){
    return{
      pages:10,
      list:[]
    }
  },
  mounted(){
    $(function(){
      // 文字鼠标移入移出
      $('.hover').hover(function(){
        $(this).css({color:'#00a2ff',transition: '.5s'})
      },function(){
        $(this).css({color:'#333',transition: '.5s'})
      })
    })
    this.init()
    
  },
   beforeRouteEnter (to, from, next) {
      console.log('我是组件路由守卫1')
      next(vm => {
        // 通过 `vm` 访问组件实例
        vm.init()
      })
  },
  methods:{
    init(){
      if(this.$route.path.indexOf('list')!=-1){
        this.getArticles()
      }else if(this.$route.path.indexOf('journal')!=-1){//日志
        this.getTypes(1,10,'日志')
      }else{//相册
        this.getTypes(1,10,'相册')
      }
    },
    toinfo(id){
      console.log(id)
      this.$router.push({
        path:'/home/info',
        query:{id}
      })
    },
    handleCurrentChange(curpage){
      console.log(curpage)
        if(this.$route.path.indexOf('list')!=-1){
          this.getArticles(curpage)
        }else if(this.$route.path.indexOf('journal')!=-1){//日志
          this.getTypes(curpage,10,'日志')
        }else{//相册
          this.getTypes(curpage,10,'相册')
        }
        console.log(this.pages)
    },
    getArticles(page=1,limit=10){
      this.$axios.post('/getArticlesInfo',{page,limit}).then(res=>{
          if(res.data.status == 'success'){
              this.list = res.data.data
              this.pages = res.data.length
              console.log(this.list)
              // 存入store
              this.$store.commit('initarticle',this.list)
          }else{
              this.$message.error(res.data.msg);
          }
      })
    },
    getTypes(page=1,limit=10,tp){
      console.log(page,limit,tp)
      this.$axios.post('/getArticleTypes',{page,limit,type:tp}).then(res=>{
          if(res.data.status == 'success'){
              this.list = res.data.data
              this.pages = res.data.length
              console.log(this.list)
          }else{
              this.$message.error(res.data.msg);
          }
      })
    },
    timeFormat(t){
      return tools.timeFormat(t)
    }
  }
    
}
</script>