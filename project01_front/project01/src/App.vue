<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
// const rem = require('@/utils/rem.js')

export default Vue.extend({
  mounted(){
    // rem(document, window)
  }
})
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
