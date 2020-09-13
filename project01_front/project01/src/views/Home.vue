<template>
  <div class="home">
    <Header msg="this is header page"/>
    <router-view/>
    <Footer msg="this is footer page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

@Component({
  components: {
    Header,
    Footer
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background: url('../assets/images/boy.gif');
}
</style>