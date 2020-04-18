<style  scoped>
  header{
    position: relative;
    height: 300px;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: url('~@/assets/images/bg1.jpg') center center no-repeat;
  }

  .nav{
    height: 100px;
    width:100%;
    margin:  0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    width: 50px;
    height: 50px;
    /* background: chocolate; */
    overflow: hidden;
  }
  .navlist{
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .items{
    margin:0 40px;
    color: white;
    font-size: 17px;
    font-weight: bold;
  }
  .something{
    height: auto;
    margin: 50px 0;
  }
  .name{
    text-align: center;
    margin: 0;
    position: relative;
  }
  .disc{
    display: block;
    color: #fff;
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
    text-align: center  ;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all  .5s;
    opacity: .5;
    top: 0;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    top:200px;
  }
</style>
<template>
    <header>
        <!-- 导航条 -->
        <div class="nav">
          <div class="logo"><router-link to='/home/list'>LOGO</router-link></div>
          <div class="navlist">
            <div class="items"><router-link to='/home/list'>首页</router-link></div>
            <div class="items"><router-link to='/home/journal'>日志</router-link></div>
            <div class="items"><router-link to='/home/message'>留言</router-link></div>
            <div class="items"><router-link to='/home/album'>相册</router-link></div>
            <div class="items"><router-link to='/home/union'>友联</router-link></div>
          </div>
        </div>
        <div class="something">
                <transition name="fade">

            <div v-if='this.$route.path.indexOf("list")!=-1'>
              <h2 class="f40 white name">白小纯</h2>
              <span class="disc">白小纯的个人博客</span>
            </div>
            <div v-if='this.$route.path.indexOf("journal")!=-1'>
              <h2 class="f40 white name">日志</h2>
            </div>
            <div v-if='this.$route.path.indexOf("album")!=-1'>
              <h2 class="f40 white name">相册</h2>
            </div>
                </transition>

        </div>

      </header>
</template>
<script>
export default {
    data() {
      return {
        
      }
    }
}
</script>