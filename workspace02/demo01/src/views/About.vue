<style scoped lang="less">
.about{
    width: 60%;
    margin: 0 auto;
  h1 , h2{
    text-align: center;
  }
  h3{
    text-align: left;
  }
  .list{
    
    ol{
      list-style-type:upper-latin;
      display: grid;
      grid-template-rows:1fr 1fr ;
      grid-template-columns: 1fr 1fr;
      gap:10px;
      li{
        cursor: pointer;
        &:hover{
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
}
.bgred{
  color: skyblue;
}

</style>
 /* eslint-disable */
<template>

  <div class="about">
    <h1>2020届陕西省榆林市绥德县绥德中学高三下期历史第五次模拟考试试题</h1>
    <h2>第I卷（选择题，共50分）</h2>
    <h3>一、选择题（本题共计25小题，每题2分，共计50分） </h3>
    <ol class="list">
      <li>
        <p :ansers="arr"  :class="{bgred:!arr[0]==''}">《三字经》中讲到：“夏（禹）传子（启），家天下，四百载，迁夏社。”这主要反映出在夏朝出现了（  {{arr[0]}} ）</p>
        <ol @click="check($event)">
          <li name="1,A">社会等级制度</li>
          <li name="1,B">社会等级制度</li>
          <li name="1,C">社会等级制度</li>
          <li name="1,D">社会等级制度</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[1]==''}"> 商代统治者凡事都要通过占卜予以决定，这一现象说明我国古代早期政治制度的一大特点是（ {{arr[1]}}  ）</p>
        <ol @click="check($event)">
          <li name="2,A">以血缘关系为纽带</li>
          <li name="2,B">神权与王权密切结合</li>
          <li name="2,C">权力高度集中于商王手中</li>
          <li name="2,D">决策体现原始民主色彩</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[2]==''}">西周晚期，诸侯国之间出现了强国兼并弱国的形势，周天子的权威逐渐削弱。上述“形势”的出现，缘于周初	（  {{arr[2]}} ）</p>
        <ol @click="check($event)">
          <li name="3,A">国家权力高度集中</li>
          <li name="3,B">分封制度的固有缺陷</li>
          <li name="3,C">以血缘关系为纽带 </li>
          <li name="3,D">父死子继，兄终弟及</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[3]==''}">秦统一中国后便征用大量的劳动力建造了规模宏大的秦始皇陵以及阿房宫。秦朝能够完成这一工程是基于（ {{arr[3]}}  ）</p>
        <ol @click="check($event)">
          <li name="4,A">小农经济的兴盛</li>
          <li name="4,B">秦始皇的正确决策</li>
          <li name="4,C">中央集权制的确立</li>
          <li name="4,D">工匠水平的高超</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[4]==''}">朝廷凡有军国大事，则中书省出令，门下省封驳，尚书省受而行之，该“朝廷”应该是	（  {{arr[4]}} ）</p>
        <ol @click="check($event)">
          <li name="5,A">北魏</li>
          <li name="5,B">唐朝</li>
          <li name="5,C">明朝</li>
          <li name="5,D">元朝</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[5]==''}">中国古代皇帝与丞相的关系可以用拔河来形容。皇帝与以丞相为首的大臣分别在绳子的一头向着自己的方向拉，在这种博弈中两者的权力达到了平衡。下列皇帝彻底打破了这一规则的是	（ {{arr[5]}}  ）</p>
        <ol @click="check($event)">
          <li name="6,A">明太祖</li>
          <li name="6,B">唐太宗</li>
          <li name="6,C">宋太祖</li>
          <li name="6,D">明成祖</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[6]==''}">鸦片战争在英国经常称英中战争或通商战争，对于英国的这种说法（{{arr[6]}}   ）</p>
        <ol @click="check($event)">
          <li name="7,A">因为这场战争是英国为维护正常贸易而进行</li>
          <li name="7,B">称英中战争比较准确的反映了这场战争的性质</li>
          <li name="7,C">站在侵略者的角度为侵略战争辩护</li>
          <li name="7,D">对现象和本质的认识比较清楚</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[7]==''}">“天无雨，地焦旱，全是教堂止住天。洋鬼子，尽除完，大清一统靖江山。”这样的标语出现于（ {{arr[7]}}  ）</p>
        <ol @click="check($event)">
          <li name="8,A">禁烟运动</li>
          <li name="8,B">太平天国运动</li>
          <li name="8,C">义和团运动</li>
          <li name="8,D">辛亥革命</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr"  :class="{bgred:!arr[8]==''}">	毛泽东曾赋诗颂扬骁勇善战的彭德怀：“山高路远坑深，大军纵横驰奔。谁敢横刀立马？唯我彭大将这。”1940年下半年，彭大将军纵横驰奔在中国华北战场，亲自指挥了一场鼓舞全国军民抗日斗志的战役。这场战役是（ {{arr[8]}}  ）</p>
        <ol @click="check($event)">
          <li name="9,A">淞沪会战</li>
          <li name="9,B">台儿庄战役</li>
          <li name="9,C">百团大战</li>
          <li name="9,D">平型关大捷</li>
        </ol>
      </li>
        <li>
        <p :ansers="arr" :class="{bgred:!arr[9]==''}">太平天国颁布的《天朝田亩制度》和《资政新篇》关于社会经济的主张（ {{arr[9]}}  ）</p>
        <ol @click="check($event)">
          <li name="10,A">试图在中国发展资本主义</li>
          <li name="10,B">脱离社会现实，流于空想</li>
          <li name="10,C">反映了农民的理想追求</li>
          <li name="10,D">受西方宗教文化的影响</li>
        </ol>
      </li>
       
    </ol>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      arr:['','','','','','','','','',''],
    }
  },
  methods:{
    check(e:any){
      console.log(e.target.getAttribute('name'));
      const anser = e.target.getAttribute('name');
      const index = +anser.split(',')[0];
      const keys = anser.split(',')[1];
      console.log(index,keys);
      this.arr[index - 1] = keys;
      this.arr.push('0');
      this.arr.pop();
      console.log(this.arr);
      
    }
  }
})
</script>