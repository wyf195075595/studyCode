<template>
  <div id="app">
    <router-view/>
      <!-- 隐藏导航 -->
        <span class="iconfont icon-caidan menu" @click="drawer = true"></span>

        <!-- 右侧抽屉 -->
        <el-drawer title="菜单"  :visible.sync="drawer"  :with-header="false"  >
          <el-menu  :default-openeds="['1']" class="el-menu-vertical-demo"  text-color='#999' active-text-color='#333' >
            <!-- 默认激活 default-active="1-1" -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>菜单</span>
              </template>
              <el-menu-item-group>
                <router-link to='/home/list'><el-menu-item index="1-1">首页</el-menu-item></router-link>
                <router-link to='/home/journal'><el-menu-item index="1-2">日志</el-menu-item></router-link>
                <router-link to='/home/message'><el-menu-item index="1-3">留言</el-menu-item></router-link>
                <router-link to='/home/album'><el-menu-item index="1-4">相册</el-menu-item></router-link>
                <router-link to='/home/union'><el-menu-item index="1-5">友联</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item @click="open" index="1-1">管理员设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          
          </el-menu>
        </el-drawer>

      <!-- 回到顶部 -->
      <el-backtop  :bottom="100" :right='10'><div class="up"> UP</div></el-backtop>
  </div>
</template>
<script>
export default {
  data(){ 
    return {
      drawer: false,
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
        this.$prompt('请输入管理员密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
            if(value == '2020'){
              this.$router.push('/admin')
            }else{
              this.$message.error('密码错误');
            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    saveState(){
      sessionStorage.setItem('articleList',JSON.stringify(this.$store.state.artcleList))
    }
  
  
  },
  mounted(){
    window.addEventListener('unload',this.saveState)
  }
}
</script>
<style>
  .menu{
    position: fixed;
    top: 10px;
    right:0;
    font-size: 30px !important;
    display: none;
    z-index: 999;
  }
.up{
    height: 100%;
    width: 100%;
    background-color: #848484;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: white;
}
body,div,ul,ol,li,dl,p,a{
  margin: 0;
  padding: 0;
}
body{
  min-width: 340px;
}
h1,h2,h3,h4,h5,h6{
    color: #333;
    font-weight: 400;
    margin: 0 0 30px 0;
}
ul,ol,dl{
  list-style: none;
}
a{
  text-decoration: none;
  color:#fff;
}
.f40{
  font-size: 40px;
}
.white{
  color: white;
}
  @media all and (min-width: 768px) and (max-width: 1024px) {
        .rightside{display: none;}
         .leftside{width: 100% !important; }
  }
  @media (max-width: 768px){
        header,.nav,.content,.comment,.time,.rightside{display: none !important;}
        .newtitleword,.menu{display: block !important;}
        /* header{justify-content: center;} */
        .middle{width: 96% !important;}
        .leftside{width: 100% !important; }
        .pic{width: 100% !important;height: auto !important;}
        .pic img{width: 100% !important;height: auto !important;}
  }
/* @media (min-width: 1024px){
body{font-size: 18px}
} 

@media (min-width: 1100px) {
body{font-size: 20px}
} 
@media (min-width: 1280px) {
body{font-size: 22px;}
} 

@media (min-width: 1366px) {

body{font-size: 24px;}
}  

@media (min-width: 1440px) {
body{font-size: 25px !important;}
} 

@media (min-width: 1680px) {
body{font-size: 28px;}
} 
@media (min-width: 1920px) {
body{font-size: 33px;}
}  */
</style>
