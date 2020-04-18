<style scoped>
.admin{
    width:90%;
    margin:0 auto;
    background:white;
}
.head{
  height:80px;
  background:#2CA8FF;
  display: flex; 
  align-items: center; 
}
.aside{
  width: auto !important;
  height:100%;
}
.main{
  width:100%;
  height:701px;
}
.footer{
  width:100%;
  height:40px;
  background:#333;
}
</style>
<template>
  <div class="admin">
       <el-container>
           <!-- 头部 -->
            <el-header class="head">
                  <el-page-header  @back="goBack" content="管理员界面"></el-page-header>
            </el-header>
            <el-container>
                <!-- 侧边栏 -->
                <el-aside class="aside">
                  <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse='isCollapse'>
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-user-solid"></i>
                        <span slot="title">用户管理</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/admin/userlist"><el-menu-item index="1-1">用户列表</el-menu-item></router-link>    
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">文章管理</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/admin/articlelist"><el-menu-item index="2-1">文章列表</el-menu-item></router-link>
                        <router-link to="/admin/addarticle"><el-menu-item index="2-2">增加文章</el-menu-item></router-link>
                      </el-menu-item-group>
                    </el-submenu> 
                    <el-submenu index="3">
                      <template slot="title">
                        <i class="el-icon-files"></i>
                        <span slot="title">分类管理</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/admin/articletype"><el-menu-item index="3-1">文章分类</el-menu-item></router-link>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                      <template slot="title">
                        <i class="el-icon-files"></i>
                        <span slot="title">留言管理</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/admin/leavemessage"><el-menu-item index="3-1">留言列表</el-menu-item></router-link>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
                </el-aside>
                <el-container>
                    <el-main class="main">
                      <!-- 路由视图 -->
                      <router-view/>
                    </el-main>
                </el-container>
            </el-container>
            <div class="footer"></div>
        </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse:false
    }
  },
  mounted(){
    // document.addEventListener('')
    window.onresize = ()=>{
      this.openCollapse()
    }
  },
  methods: {
      openCollapse(){
        if(document.body.clientWidth <= 1200){
          this.isCollapse =true
        }else{
          this.isCollapse =false
        }
        
      },
      goBack(){
        this.$router.push('/home')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }

};
</script>
