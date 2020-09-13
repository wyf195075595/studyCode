<style  scoped lang="less">
  .news{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10% 10;
    article{
      width: 50%;
      margin: 0 auto;
      border: 1px solid skyblue;
      box-shadow: 1px 0 10px 3px rgba(0,0,0,0.3);
      padding: 10px;
      margin-bottom: 20px;
    }
    section{
      width: 50%;
      margin: 0 auto;
      border: 1px solid skyblue;
      box-shadow: 1px 0 10px 3px rgba(0,0,0,0.3);
      padding: 10px;
      margin-bottom: 20px;  
      .comments{
        width: 100%;
        height: 100%;
        background: rgba(127, 159, 172,0.4);
        text-indent: 2em;
        white-space: normal;
        position: relative;
        .del{
          display: block;
          position: absolute;
          top: 0;
          right: 5%;
          width: 10px;
          height: 10px;
          color: #333;
        }
      }
    }
    footer{
     width: 50%;
      margin: 0 auto;
      border: 1px solid skyblue;
      box-shadow: 1px 0 10px 3px rgba(0,0,0,0.3);
      padding: 10px;
      textarea{
        width: 100%;
        height: 80px;
      }
    }
  }
</style>
<template>
  <div class="news">
    <article >
      陈平安喝过了一大口酒，醉眼朦胧，但是一双眼眸，清澈见底，如溪涧幽泉，开心、伤感、遗憾、欢喜，都在流淌，而且干干净净，只听少年摇头笑道：“喜欢一个人，总得让她开心吧，如果觉得喜欢谁，谁就一定要跟自己在一起，这还是喜欢吗？”
说到这里，少年眼泪便流了下来，“可是我就是嘴上这么说说的，其实我都快伤心死了。我其实恨不得整个倒悬山，整个浩然天下，都知道我喜欢那个姑娘。然后我只希望天底下就这么一个姑娘，喜欢我……”
    </article>
    <section>
      <div class="comments">{{msg}}<span class="del">X</span></div>
    </section>
    <footer>
      <textarea class="content" >
        
      </textarea>
      <button class="submit">发布</button>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DataHellper from '../tools/DataHellper'

@Component
export default class News extends Vue {
  @Prop() private msg!: string;
  mounted(){
    const dh = new DataHellper('comments','id');
    console.log('datahelper对象',dh);
  }
}
</script>
