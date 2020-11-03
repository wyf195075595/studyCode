<template>
    <div>
        <h2>Input</h2>
        {{value}}
         <input type="text"
            :value="value"
            @input="changeNum"

        >
    </div>
</template>

<script>
export default {
    
  model:{
    prop:'value',
    event:'input'
  },
  props: {
    value: String,
  },
  methods:{   
    changeNum(params){
      this.$emit('input',params.target.value)
      console.log('ok',params.target.value);
      // this.$parent.event1(params.target.value)
    }
  },
  mounted(){
      console.log('开始',this.value);
  }
}
</script>