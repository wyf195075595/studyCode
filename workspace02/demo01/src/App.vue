<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">随堂考试</router-link>
      <router-link to="/news">News</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
  width:15% ;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(2,1fr);
  grid-template-columns: repeat(3,1fr);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
