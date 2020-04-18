<style scoped>
.login {
  width: 320px;
  padding: 8% 0 0;
  margin: auto;
}
.login h1 {
  text-align: center;
}
.top {
  border-left: 4px solid #00a0d2;
  padding: 12px;
  margin-left: 0;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}
.top {
  line-height: 1.5;
}
.loginForm {
  margin-top: 20px;
  margin-left: 0;
  padding: 26px 24px 46px;
  font-weight: 400;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
}
.bt {
  font-size: 14px;
  padding: 10px 24px 0;
  color: #444;
}
a {
  color: #444;
}
</style>
<template>
  <div class="login">
    <h1>LOGO</h1>
    <div class="top" v-if="this.$route.path.indexOf('login')==-1">
      <p>欢迎注册本站</p>
    </div>
    <div class="loginForm">
      <el-form label-position="top" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="用户名2-8个字符" minlength=2 maxlength=8 ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="pwd" placeholder="密码4-16个字符"  minlength=4 maxlength=16 ></el-input>
        </el-form-item>
        <el-form-item v-if="this.$route.path.indexOf('login')==-1">
          <el-button type="primary" @click="sign">注册</el-button>
        </el-form-item>
        <el-form-item v-else>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
      <p class="bt">
        <router-link to="/login" v-if="this.$route.path.indexOf('login')==-1">登录</router-link>
        <router-link to="/sign" v-else>注册</router-link>| 忘记密码？
      </p>
      <p class="bt">
        <router-link to="/home">← 返回到白小纯</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      pwd: ""
    }
  },
  methods: {
    sign() {
      if (!this.username||this.username.length<2||this.username.length>8) {
          this.$message({
          message: '用户名不规范',
          type: 'warning'
        });
      } else if (!this.pwd||this.pwd.length<4||this.pwd.length>16) {
          this.$message({
          message: '密码不规范',
          type: 'warning'
        });
      } else {
        var info = {
          username:this.username,
          pwd:this.pwd
        };
        this.$axios.post('/sign',info).then(res=>{
          if(res.data.status == 'success'){
              this.$message({message:res.data.msg,type:'success',duration:2000})
              // 成功跳转至login
              setTimeout(() => {
                this.$router.push('/login')
              }, 1500);
              
          }else{
            this.$message.error(res.data.msg);
          }
        })
      }
    },
    login() {
      if (!this.username||this.username.length<2||this.username.length>8) {
        this.$message({
          message: '用户名不规范',
          type: 'warning'
        });
      } else if (!this.pwd||this.pwd.length<4||this.pwd.length>16) {
        this.$message({
          message: '密码不规范',
          type: 'warning'
        });
      } else {
        var info = {
          username:this.username,
          pwd:this.pwd
        };
        this.$axios.post('/login',info).then(res=>{
          if(res.data.status == 'success'){
              this.$message({message:res.data.msg,type:'success',duration:2000});
              localStorage.setItem("blogInfo", JSON.stringify(res.data.data[0]));
                 // 成功跳转至home
              setTimeout(() => {
                this.$router.push('/home')
              }, 1500);
          }else{
              this.$message.error(res.data.msg);
          }
        })
      }
    }
  }
};
</script>
