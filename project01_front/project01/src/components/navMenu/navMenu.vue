<template>
  <div class="el-menu-demo el-menu--horizontal el-menu">
      <!-- //循环数据；数据menuList通过props传递 -->
        <template v-for="list in this.menuList" >  
            <el-submenu  v-if="list.children.length>0" :key="list.resourceId" :index="list.resourceName"  > 
            <template slot="title"   > {{ list.resourceName}}</template>
                <!-- <i class="el-icon-menu"></i> -->
                <!-- <span slot="title"></span> -->
            
            
            <!-- //当有子集数据再次使用这个模板，:menuList通过props传递 -->
                <el-menu-item v-for="item in list.children" :index="item.resourceName"  :key="item.resourceId">
                    {{item.resourceName}}
                </el-menu-item>
            <!-- <Menu :menuList="list.children"></Menu> -->

            </el-submenu>
            
            <el-menu-item v-else :index="list.resourceName"  :key="list.resourceId">
            {{list.resourceName}}
            </el-menu-item>
        </template>
        <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private menuList!: Array<any>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  /deep/.el-menu--collapse  span,
  .el-menu--collapse  i.el-submenu__icon-arrow
  {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
</style>


