<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
// import Vue from 'vue'
import { Component, Vue , Watch} from 'vue-property-decorator';

// const rem = require('@/utils/rem.js')
@Component({
  components: {
    
  }
})
export default class App extends Vue{
  created(){
    let data = sessionStorage.getItem('store') || false;
    if(data){
      this.$store.replaceState(Object.assign({},this.$store.state, JSON.parse(data) ))
    }
    window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('store',JSON.stringify(this.$store.state))
    })
  }
  mounted(){
    // rem(document, window)
    
    var routers = this.$router.options.routes||[];
    routers.push({
      path:'*',
      redirect:'/404'
    });
    this.$router.addRoutes(routers);
    sessionStorage.setItem('routes',JSON.stringify(routers))
    console.log('okkk');
    this.routeChange(this.$route, this.$route);
    // routes.map((item:any)=>{
    //   routers.push(item);
    // })
    

  }
  @Watch('$route')
    routeChange(val: any, oldVal: any): void {
        console.log('新',val,'旧',oldVal);
  }

}
</script>
<style lang="less">
body,div,h1,h2,h3,h4,h5,p,a,ul,li,ol,dl{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  // background: url('./assets/images/boy.gif');
  #loading-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.4);
    font-size: 32px;
  }
}
</style>
