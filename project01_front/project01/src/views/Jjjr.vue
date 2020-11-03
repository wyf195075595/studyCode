<template>
  <div class="game">
      <div class="container">
        进击巨人
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
  
  beforeRouteEnter(to , from ,next){
    next(
      // vm=>{
      //   console.log('路由',vm.$route);
      //   if(vm.$route.meta == 'admin'){
      //     console.log('可以进去');
          
      //   }else{
      //     console.log('不能进去');
      //     vm.$router.push({path:'/index'})
      //   }
      // }
    )
  }
})

export default class Game extends Vue {

  mounted(){
    console.log(this.$router);
    
    Vue.nextTick(()=>{
      
    })
  }
}
</script>
<style lang="less" scoped>
.game{
  width: 100%;
//   flex: auto;
  // height: 86vh;
  height: calc(100vh - 120px);
  overflow-y: auto;
  &::-webkit-scrollbar{
      width: 0;
  }
  .container{
    width: 70%;
    min-width: 1200px ;
    height: 100%;
    // background: #sky;
    margin: 0 auto;
    padding-top: 80px;
    overflow: hidden;
    
  }
}
</style>