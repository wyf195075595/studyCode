<style scoped>
.table{
    width: 100%;
}
.hide{
    display: inline-block;
}
.btgap{
    margin: 0 10px;
}
</style>
<template>
    <div class="users">
          <el-table :data="tableData" class="table" height="620px">
            <el-table-column label="注册日期" width="230">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ timeFormat(scope.row.time)}}</span>
            </template>
            </el-table-column>
            <el-table-column label="用户名" >
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>用户名: {{ scope.row.name }}</p>
                <!-- <p>住址: {{ scope.row.address }}</p> -->
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="操作" width="250">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="keyword" size="mini" @keyup.enter.capture.native="search" placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button class="btgap" size="mini"  @click="handleEdit(scope.$index, scope.row)">修改密码</el-button>
                    <el-popconfirm  title="确定注销此用户吗？"
                    @onConfirm="handleDelete(scope.$index, scope.row)"  @onCancel="handleCancel">
                        <el-button size="mini" class="btgap"   type="danger"  slot="reference" >注销用户</el-button>
                    </el-popconfirm>
                </template>
                </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData:[],
        rpwd:'',
        keyword:""
      }
    },
    mounted(){
        this.getUserList()
    },
    methods: {
     
        search(){
            console.log(this.keyword)
            if(this.keyword){
                this.$axios.post('/searchUser',{keyword:this.keyword}).then(res=>{
                    if(res.data.status == 'success'){
                        this.tableData = res.data.data
                        this.keyword = ''
                    }else{
                        this.$message.error(res.data.msg);
                    }
                })
            }else{
                this.getUserList()
            }
        },
        handleEdit(index, row) {
            console.log(index, row);
            var id = row._id;
             this.$prompt('请输入密码', '修改密码', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^[\w]{4,16}$/,
                inputErrorMessage: '密码格式不正确'
                }).then(({ value }) => {
                    this.$axios.post('/changePwd',{id,pwd:value}).then(res=>{
                        console.log(res.data)
                        if(res.data.status == 'success'){
                             this.$message({
                                type: 'success',
                                message: res.data.msg
                            });
                        }else{
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            }); 
                        }
                    })
                   
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
        },
        handleDelete(index, row) {
            var id = row._id;
            this.$axios.post('/delbyuseId',{id}).then(res=>{
                if(res.data.status == 'success'){
                    this.$message({message:res.data.msg,type:'success',duration:2000})
                    this.getUserList()
                }else{
                    this.$message.error(res.data.msg);
                }
            })

            console.log(index, row);
        },
        handleCancel(){
            this.$message({
                type: 'info',
                message: '取消操作'
            }); 
        },
        getUserList(){
            this.$axios.post('/userlist').then(res=>{
                if(res.data.status == 'success'){
                    this.tableData = res.data.data
                }else{
                    this.$message.error(res.data.msg);
                }
            })
        },
        change(){
            this.isChange = !this.isChange;
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
            var hours = timeStr.getHours()
            if(hours<10){
                hours="0"+hours;
            }
            var minutes = timeStr.getMinutes();
            if(minutes<10){
                minutes="0"+minutes;
            }
            return year+"-"+month+"-"+today+" "+hours+":"+minutes;
        }
    }
}
</script>