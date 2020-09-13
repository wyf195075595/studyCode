<template>
  <div class="footer">
    <el-divider><i class="el-icon-time"></i>&nbsp;&nbsp;{{time||'00:00:00'}}</el-divider>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
  private time = ''
  @Watch('time')
  getTime(newVal:string,oldVal:string){

  }
  mounted(){
    setInterval(()=>{
      let t = new Date();
      this.time = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    },1000)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
  height: 60px;
  width: 70%;
  min-width: 1200px ;
  margin: 0 auto;
}
</style>
