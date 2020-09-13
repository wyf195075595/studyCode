<style scoped>
.table{
    width: 100%;
    height: 620px;
    min-height: 620px;
    /* overflow-y: scroll; */
}
.ps{
    margin-top: 5px;
}
.bts{
    margin:  0 5px;
}
</style>
<template>
    <div class="article">
         <el-table ref="filterTable" :data="tableData" class="table" height="620px">
            <el-table-column  label="发布日期"  width="180" align='center' >
             <template slot-scope="scope">
                {{timeFormat(scope.row.time)}}
            </template>
            </el-table-column>
            <el-table-column prop="title" label="标题"> </el-table-column>
            <el-table-column prop="tag" label="标签" width="100">
            <template slot-scope="scope">
                <el-tag :type="scope.row.tag === '随笔' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
            </el-table-column>
            <el-table-column label="操作"  width="180">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="keyword"  size="mini" placeholder="输入标题关键字"/>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" class="bts" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-popconfirm  title="确定删除文章吗？" @onConfirm="handleDelete(scope.$index, scope.row)"  >
                        <el-button size="mini" class="bts"  type="danger"  slot="reference" >删除</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination class="ps" backgroundlayout="prev, pager, next" :total="length" @current-change="change"  ></el-pagination>
    </div>
</template>
<script>
import Editor from './Editor.vue'
export default {
    data(){
        return{
            keyword:'',
            tableData:[],
            length:10
        }
    },
    components:{
        
    },
    watch:{
        keyword:function(newk,oldk){
            // console.log(newk)
            this.search(newk)
        }
    },
    mounted(){
        this.getArticles()
    },
    methods:{
        search(value=''){
          $('.ps').hide()
          if(value.length>0){
              this.keyword = value
          }
        //   console.log(this.keyword)
          if(this.keyword){
              this.$axios.post('/searchArticle',{keyword:this.keyword}).then(res=>{
                    if(res.data.status == 'success'){
                        this.tableData = res.data.data
                        this.$message({message:res.data.msg,type:'success',duration:2000})
                    }else{
                        this.$message.error(res.data.msg)
                    }
              })
          }  else{
              this.getArticles()
          }
        },
        change(page){
            // console.log('下一页',page)
            this.getArticles(page)
        },
        handleEdit(index,row){
            // console.log(index,row._id)
            this.$router.push({
                path:'/admin/updataarticle',
                query:{
                    id:row._id
                }
            })
        },
        handleDelete(index,row){
            // console.log(index,row)
            this.$axios.post('/delArticleByid',{id:row._id}).then(res=>{
                if(res.data.status == 'success'){
                    this.$message({message:res.data.msg,type:'success',duration:2000})
                    this.getArticles()
                }else{
                    this.$message.error(res.data.msg)
                }
            })
        },
        getArticles(page=1,limit=10){
            $('.ps').show()
            this.$axios.post('/getArticles',{page,limit}).then(res=>{
                if(res.data.status == 'success'){
                    this.tableData = res.data.data
                    this.length = res.data.length
                }else{
                    this.$message.error(res.data.msg);
                }
            })
        },
        timeFormat(time){
            var timeStr = new Date(+time);
            var year = timeStr.getFullYear();
            var month = timeStr.getMonth()+1;
            if(month<10){
                month="0"+month;
            }
            var today = timeStr.getDate();
            if(today<10){
                today="0"+today;
            }
            // var hours = timeStr.getHours()
            // if(hours<10){
            //     hours="0"+hours;
            // }
            // var minutes = timeStr.getMinutes();
            // if(minutes<10){
            //     minutes="0"+minutes;
            // }
            // +" "+hours+":"+minutes
            return year+"-"+month+"-"+today;
        }
    }
}
</script>