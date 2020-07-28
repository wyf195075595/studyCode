<style lang="less" scoped>
    #dialog{
      .dialog-box{
        /deep/.el-dialog{
            position: relative;
            display: flex;
            flex-direction: column;
            background: skyblue;
            height:50%;
          .dialog-title{
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .el-dialog__body{
            flex: 1;
          }
          .dialog-footer{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        
      }
    }
</style>
<template>
    <div id="dialog">
        <el-dialog class="dialog-box"  :visible.sync="outerVisible" >
            <!-- :title="content.title" -->
            <div slot="title" class="dialog-title">{{content.title}}</div>
            <section v-html="content.info"></section>
            <div slot="footer" class="dialog-footer">
              <el-button @click="outerVisible = false">取 消</el-button>
              <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    // props: ['visible','info'],
    data() {
      return {
        outerVisible: false,
        content:{title:'',info:''}
      };
    },
    methods:{
        // close(){
        //     this.$emit('closeDiallog',false)
        // }
    }
}
</script>