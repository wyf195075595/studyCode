<style scoped>

</style>
<template>
    <div class="articleType">
        <el-table :data="tableData" height="450px" style="width: 100%;">
            <el-table-column type="index" width="120" align="center"></el-table-column>
            <el-table-column label="标签名"  align="left">
                <template slot-scope="scope">
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.tagname }}</el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="300"  align="center">
                <template slot-scope="scope">
                    <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                    <el-button size="mini"  type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="tags">
                <el-button slot="append" @click.capture.native="addTags">增加标签</el-button>
            </el-input>
        </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData:[],
        tags:''
      }
    },
    mounted(){
        this.getTas()
    },
    methods: {
      addTags(){
          if(this.tags){
              this.$axios.post('/addtags',{tagname:this.tags}).then(res=>{
                  if(res.data.status == 'success'){
                      this.$message({message:res.data.msg,type:'success',duration:2000})
                      this.getTas()
                  }else{
                      this.$message.error(res.data.msg);
                  }
                  this.tags = ''
              })
          }
      },
    //   handleEdit(index, row) {
    //     console.log(index, row);
    //   },
      handleDelete(index, row) {
        this.$axios.post('/deltags',{id:row._id}).then(res=>{
            if(res.data.status == 'success'){
                this.$message({message:res.data.msg,type:'success',duration:2000})
                this.getTas()
            }else{
                this.$message.error(res.data.msg);
            }
        })
      },
      getTas(){
          this.$axios.post('/gettags').then(res=>{
              if(res.data.status == 'success'){
                  this.tableData = res.data.data
              }else{
                  this.$message.error(res.data.msg);
              }
          })
      }
    }
}
</script>