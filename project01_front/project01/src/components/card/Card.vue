<template>
    <div class="carBox" v-if="carList.length > 0" >
        <div class="card" v-for="(item,index) in carList" :key="index" 
            @click="onClickCard"
           
        >
              <div class="imgBox">
                <slot :name='index'><i class="el-icon-s-promotion icons"></i></slot>
                <h3>{{item.title}}</h3>
              </div>
              <div class="content">
                  {{item.content}}
              </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component , Prop ,Vue ,Emit} from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class Index extends Vue {
    @Prop(Array) private carList: Array<object> | undefined;
    @Prop(String) private width: string | undefined;
    //发送事件
    @Emit('click') private emitOnClickEvent(event:MouseEvent){}
    // 触发事件
    private onClickCard(event:MouseEvent){
        this.emitOnClickEvent(event)
    }
    
    mounted(){
      // Vue.nextTick(()=>{
      //   console.log(this.carList);
        
      // })
      
    }
}
</script>
<style lang="less" scoped>

    .carBox{
        width: 100%;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
      .card{
        width: 300px;
        height: 400px;
        background: #fff;
        transition: 0.5s;
        position: relative;
        &:nth-child(1){
          z-index: 3;
        }
        &:nth-child(2){
          z-index: 2;
        }
        &:nth-child(3){
          z-index: 1;
        }
        &::before{
            content: '';
            position: absolute;
            top: -15px;
            left: 0;
            width: 100%;
            height: 15px;
            background: #00c0f6;
            transform-origin: bottom;
            transform: skewX(45deg);
            transition: 0.5s;
        }
        &::after{
            content: '';
            position: absolute;
            top: -15px;
            left: -15px;
            width: 15px;
            height: 50%;
            background: #00c0f6;
            transform-origin: left;
            transform: skewX(45deg);
            transform: skewY(45deg);
            transition: 0.5s;
            border-bottom: 200px solid #d9d9d9;
        }
        &:hover{
          transform: translateY(-40px);
        }
        &:hover .content::before{
          transform: translateY(40px) skewX(45deg);
          filter: blur(5px);
          opacity: 0.5;
        }
        .imgBox{
          position: relative;
          width: 300px;
          height: 200px;
          background: #00c7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .icons{
            font-size: 60px;
            color: white;
          }
          h3{
            position: relative;
            color: #fff;
            margin-top: 10px;
          }
        }
        .content{
          position: relative;
          width: 100%;
          height: 200px;
          padding: 20px;
          text-align: center;
          background: #fff;
          &::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 400px;
            background: linear-gradient(transparent,transparent,rgba(0,0,0,0.1));
            transform: skewX(45deg);
            transform-origin: bottom;
            transition: 0.5s;
            pointer-events: none;
            z-index: -1;
          }
        }
      }
      
    }
</style>