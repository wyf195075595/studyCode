<template>
  <h2>welcome to my page3{{msg}}</h2>
  <input type="text" v-model="msg">
  <HelloWorld  />
  <!-- <InputItem v-model="msg" /> -->
  <InputItem :value="msg" @input="msg = $event.target.value" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputItem from './components/InputItem.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputItem
  },
  data(){
    return {
      msg:'aaa'
    }
  },
  methods:{
    event1(val){
      console.log('我是父级',val);
    }
  },
  mounted(){
  },
  setup(){
    // function event1(val){
    //   console.log('我是父级',val);
    // }

    // return {
    //   event1
    // }
  }
}
</script>
