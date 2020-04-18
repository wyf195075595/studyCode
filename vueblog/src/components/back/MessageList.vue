<style scoped>

</style>
<template>
    <div class="articleType">
        <el-table :data="tableData" height="600px" style="width: 100%;">
            <el-table-column type="index" width="120" align="center"></el-table-column>
            <el-table-column label="时间"  align="center">
                <template slot-scope="scope">{{ scope.row.time }}</template>
            </el-table-column>
            <el-table-column label="留客名"  align="center">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="300"  align="center">
                <template slot-scope="scope">
                     <el-popconfirm  title="确定删除此评论吗？"
                    @onConfirm="handleDelete(scope.$index, scope.row)" >
                        <el-button size="mini" class="btgap"   type="danger"  slot="reference" >删除</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 15px;">
            <el-pagination @current-change="handleCurrentChange" layout=" prev, pager, next" background :total="pages"></el-pagination>
        </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData:[],
        pages:0
      }
    },
    mounted(){
        this.getMessages()
    },
    methods: {
    handleCurrentChange(curpage){
        this.getMessages(curpage)
    },
    handleDelete(index, row) {
        console.log(row)
        this.$axios.post('/delMessages',{id:row._id}).then(res=>{
            if(res.data.status == 'success'){
                this.$message({message:res.data.msg,type:'success',duration:2000})
                this.getMessages()
            }else{
                this.$message.error(res.data.msg);
            }
        })
      },
    getMessages(page=1,limit=10){
          this.$axios.post('/getMessages',{page,limit}).then(res=>{
              console.log(res.data)
              if(res.data.status == 'success'){
                  this.tableData = res.data.data
                  this.pages = res.data.length
              }else{
                  this.$message.error(res.data.msg);
              }
          })
      }
    }
}
</script>