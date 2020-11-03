<template>
  <div class="game">
      <div class="container">
        <section>
          <el-row type="flex" justify="space-between" :gutter="40" >
            <el-col :span="12">
              <el-card class="fit_content" :body-style="{ padding: '10px' }">
                      <div slot="header" class="clearfix">
                      <span>卡片名称</span>
                    </div>
                      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate | timeFormat}}</time>
                          <el-button type="text" class="button" @click="click1">操作按钮{{this.$store.getters.getDemoValue}}</el-button>
                        </div>
                      </div>
              </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="fit_content" :body-style="{ padding: '10px' }">
                        <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                      </div>
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 14px;">
                          <span>好吃的汉堡</span>
                          <div class="bottom clearfix">
                            <time class="time">{{ currentDate | timeFormat}}</time>
                            <el-button type="text" class="button">操作按钮{{getStr}}</el-button>
                          </div>
                        </div>
                </el-card>
            </el-col>
            
          </el-row>
          <el-row justify="space-between" >
              <el-col :span="24">
                  <el-card class="fit_content" :body-style="{ padding: '10px' }">
                          <div slot="header" class="clearfix">
                          <span>注册</span>
                        </div>
                          <div style="padding: 14px;">
                            <el-form ref="form" :model="form" label-width="80px">
                              <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="活动区域">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                  <el-option label="区域一" value="shanghai"></el-option>
                                  <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                              </el-form-item>
                              <el-form-item label="活动时间">
                                <el-col :span="11">
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                </el-col>
                              </el-form-item>
                              <el-form-item label="即时配送">
                                <el-switch v-model="form.delivery"></el-switch>
                              </el-form-item>
                              <el-form-item label="活动性质">
                                <el-checkbox-group v-model="form.type">
                                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                </el-checkbox-group>
                              </el-form-item>
                              <el-form-item label="特殊资源">
                                <el-radio-group v-model="form.resource">
                                  <el-radio label="线上品牌商赞助"></el-radio>
                                  <el-radio label="线下场地免费"></el-radio>
                                </el-radio-group>
                              </el-form-item>
                              <el-form-item label="活动形式">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                              </el-form-item>
                              <el-form-item>
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                              </el-form-item>
                            </el-form>
                            <div class="bottom clearfix">
                              <time class="time">{{ currentDate }}</time>
                              <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                          </div>
                  </el-card>
              </el-col>
          </el-row>
          
        </section>
        
      </div>
  </div>
</template>

<script lang="ts">
import { timeFormat } from '@/utils/filters';
import { Component, Vue } from 'vue-property-decorator';
import { mapState,mapMutations } from 'vuex'
Vue.filter('timeFormat',(time:number)=>{
    let t = new Date(time);
    return `${t.getFullYear()}/${t.getMonth() > 8?t.getMonth()+1:'0'+(t.getMonth()+1)}/${t.getDate()>9?t.getDate():'0' + t.getDate()}`
})
@Component({
  components: {
  },
  
  beforeRouteEnter(to , from ,next){
    next(
      // vm=>{
      //   console.log('路由',vm.$route);
      //   if(vm.$route.meta == 'admin'){
      //     console.log('可以进去');
          
      //   }else{
      //     console.log('不能进去');
      //     vm.$router.push({path:'/index'})
      //   }
      // }
    )
  }
})

export default class Game extends Vue {
  private currentDate:Date = new Date();
  private str:string = 'ok';
  private form:object = {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        };
  get getStr(){
    return 'computed' + this.str ;
  }
  // computed: mapState({
  //   count: 'count', // 第一种写法
  //   sex: (state) => state.sex, // 第二种写法
  //   from: function (state) { // 用普通函数this指向vue实例,要注意
  //     return this.str + ':' + state.from
  //   },
  //   // 注意下面的写法看起来和上面相同,事实上箭头函数的this指针并没有指向vue实例,因此不要滥用箭头函数
  //   // from: (state) => this.str + ':' + state.from
  //   myCmpted: function () {
  //     // 这里不需要state,测试一下computed的原有用法
  //     return '测试' + this.str
  //   }
  // })
  onSubmit() {
        console.log('submit!',this.form);
  }
  
  click1(){
    this.$store.dispatch('event1','test')
  }
  mounted(){
    console.log(this.$store);

    Vue.nextTick(()=>{
      
    })
  }
}
</script>
<style lang="less" scoped>
.game{
  width: 100%;
//   flex: auto;
  // height: 86vh;
  height: calc(100vh - 120px);
  overflow-y: auto;
  &::-webkit-scrollbar{
      width: 0;
  }
  .container{
    width: 70%;
    min-width: 1200px ;
    height: 100%;
    // background: #sky;
    margin: 0 auto;
    padding-top: 80px;
    overflow: hidden;
    section{
      overflow-y:auto;
      width:100%;
      height: 100%;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
    // .fit_content{
    //   width: fit-content;
    // }
    
  }
}
</style>