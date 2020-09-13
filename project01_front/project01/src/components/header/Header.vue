<template>
  <div class="header">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="navs">
        <el-input placeholder="请输入内容" v-model="search_keyword" clearable class="search_keyword" @change="toSearch">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal"
        @select="handleSelect"
        text-color="#333"
        active-text-color="#43C91F" >
          <template v-for="list in this.menuList" >  
              <el-submenu  v-if="list.children.length > 0" :key="list.resourceId" :index="list.resourceName"  > 
                <template slot="title"> {{ list.resourceName}}</template>
                  <el-menu-item v-for="item in list.children" :index="item.resourceName"  :key="item.resourceId"> {{item.resourceName}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="list.resourceName"  :key="list.resourceId">{{list.resourceName}}</el-menu-item>
          </template>
        </el-menu>
    </div>

  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components:{

  }
})
export default class Header extends Vue {
  @Prop() private msg!: string;

  private activeIndex = '1';
  private search_keyword = '';
  menuList:Array<any> = [
    {
      resourceId:'001',
      resourceName:'游戏',
      children:[
        {
          resourceId:'002',
          resourceName:'火影忍者',
          children:[]
        }
      ]
    },
    {
      resourceId:'003',
      resourceName:'视频',
      children:[]
    },
    {
      resourceId:'004',
      resourceName:'小说',
      children:[]
    },
  ]

  mounted(){
    
  }
  toSearch(){
    if(!this.search_keyword){
      return ;
    }
    this.$message({
      message: `搜索关键字：${this.search_keyword}`,
      type: 'success'
    });
    
  }
  handleSelect(key:string, keyPath:string) {
      console.log(key, keyPath);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{
    height: 60px;
    width: 70%;
    min-width: 1200px ;
    margin: 0 auto;
    background: #fff;
    .navs{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: solid 1px #e6e6e6;
      /deep/.el-menu.el-menu--horizontal{
        border: none;
      }
      .search_keyword{
        width: 200px;
      }
    }
  }
</style>
