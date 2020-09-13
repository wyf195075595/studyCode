<style scoped>
.inpwarp{
    width: 60%;
}
.sub{
    position: fixed;
    right: 5%;
    bottom: 10%;
}
</style>
<template>
    <div class="article">
        <div style="margin-top: 15px;">
            <el-form label-position="left" label-width="80px" >
            <el-form-item class="inpwarp" label="标题">
                <el-input v-model="title" placeholder='标题至少两个字符'></el-input>
            </el-form-item>
            <el-form-item class="inpwarp" label="标签">
                 <el-select v-model="value" clearable placeholder="请选择">
                    <el-option v-for="item in tags" :key="item.tagname" :value="item.tagname"></el-option>
                </el-select>
            </el-form-item>
            </el-form>
            <div class="content">
                <!-- //:getPics='getPics' :getVal='getVal' -->
                <Editor  v-model='content' @getpics='getpics' @getval='getval' />
            </div>
             <el-button v-if="this.$route.path.indexOf('addarticle')!=-1" type="primary" class="sub" @click="sub">发布文章</el-button>
             <el-button v-else type="primary" class="sub" @click="update">确认修改</el-button>
        </div>
    </div>
</template>
<script>
import Editor from './Editor.vue'
export default {
    data(){
        return{
            title:'',
            tags:[],
            value: '',
            content:"",
            picUrl:'',
            id:''
        }
    },
    components:{
        Editor
    },
    mounted(){
        this.getTas()
        if(this.$route.query.id){
            this.id = this.$route.query.id;
            this.$axios.post('/getArticleInfo',{id:this.$route.query.id}).then(res=>{
                // console.log(res.data)
                if(res.data.status == 'success'){
                    this.title = res.data.data.title
                    this.value = res.data.data.tag
                    this.content = res.data.data.content
                    this.picUrl = res.data.data.picUrl
                }else{
                     this.$message.error(res.data.msg);
                }
            })
        }
    },
    methods:{
        getpics(val){
            // console.log(val)
            this.picUrl = val[0]
        },
        getval(val){
            // console.log(val)
            this.content = val
        },
        update(){//
            if(!this.title||this.title.length<2){
                  this.$message.error('标题格式不符');
            }else if(!this.value){
                  this.$message.error('标签不能为空');
            }else if(!this.content||this.content.length<5){
                  this.$message.error('内容格式不符');
            }
            else{
                this.$axios.post('/updateArticle',{id:this.id,title:this.title,tag:this.value,picUrl:this.picUrl||'',content:this.content}).then(res=>{
                    //   console.log(res.data)
                      if(res.data.status == 'success'){
                            this.$message({message:res.data.msg,type:'success',duration:2000})
                            // this.content = ''
                            // this.value = ''
                            // this.title = ''
                            setTimeout(()=>{
                                this.$router.push('/admin/articlelist')
                            },1500)
                        }else{
                            this.$message.error(res.data.msg);
                        }
                })
            }
        },
        sub(){
            // console.log("内容",this.content)
            if(!this.title||this.title.length<2){
                  this.$message.error('标题格式不符');
            }else if(!this.value){
                  this.$message.error('标签不能为空');
            }else if(!this.content||this.content.length<5){
                  this.$message.error('内容格式不符');
            }
            else{
                this.$axios.post('/addArticle',{title:this.title,tag:this.value,picUrl:this.picUrl||'',content:this.content}).then(res=>{
                      if(res.data.status == 'success'){
                            this.$message({message:res.data.msg,type:'success',duration:2000})
                            // this.content = ''
                            // this.value = ''
                            // this.title = ''
                        }else{
                            this.$message.error(res.data.msg);
                        }
                })
            }
        },
        getTas(){
          this.$axios.post('/gettags').then(res=>{
              if(res.data.status == 'success'){
                  this.tags = res.data.data
              }else{
                  this.$message.error(res.data.msg);
              }
          })
        }
    }
}
</script>