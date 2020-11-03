<template>
  <div class="editBox">
      <label for="edit">
          输入文字
          <input 
          id="edit" 
          :value='foo'
          @change="changTxt"
          type="text" >
      </label>
      <p>{{foo | addStr}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model , Watch ,Emit} from 'vue-property-decorator';
import * as fts from '@/utils/filters'
let itemList = Object.values(fts);

Object.keys(fts).forEach((key , index)=>{
  Vue.filter(key,itemList[index])
  
})

@Component
export default class Footer extends Vue {
  // @Prop(String) private text: string = '';
  @Model('event1') foo!:string;
  changTxt(params:any){
      console.log(params.target.value);
      this.$emit('event1',params.target.value)
  }
  
  mounted(){
    let t = Date.now()
    // console.log(timeFormat(t));
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.editBox{
  height: 60px;
  width: 70%;
  min-width: 1200px ;
  margin: 0 auto;
  display: flex;
}
</style>
