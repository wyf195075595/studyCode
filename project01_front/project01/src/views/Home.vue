<template>
  <div class="home">
    <Header :navList="navList"/>
    <router-view/>
    <Footer msg="this is footer page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Watch} from 'vue-property-decorator';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
@Component({
  components: {
    Header,
    Footer
  },
})
export default class Home extends Vue {
 navList:Array<object> = [];
 mounted():void{
   setTimeout(()=>{
    this.navList = [
      {
        resourceId:'001',
        resourceName:'游戏',
        children:[
          {
            resourceId:'game',
            resourceName:'火影忍者',
            children:[]
          }
        ]
      },
      {
        resourceId:'003',
        resourceName:'视频',
        children:[
          {
            resourceId:'jjjr',
            resourceName:'进击的巨人1',
            children:[]
          },
          {
            resourceId:'jjjr1',
            resourceName:'进击的巨人2',
            children:[]
          }
        ]
      },
      {
        resourceId:'004',
        resourceName:'小说',
        children:[
          {
            resourceId:'lwzx',
            resourceName:'龙王赘婿',
            children:[]
          }
        ]
      },
      {
        resourceId:'index',
        resourceName:'首页',
        children:[ ]
      }
    ]
   },1500)
 }
}
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