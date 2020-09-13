<style scoped  lang="less">
    .container{
        display: flex;
        flex-direction: column;
        
        header{
            height: 90px;
            width: 100%;
            background: red;
        }
        main{
            height: 100%;
            width: 100%;
            background: #ccc;
            overflow: hidden;

        }
        section{
            position: fixed;
            width: 160px;
            height: 560px;
            background:url('/static/images/menu-aside-bg.png');
            background-size: cover;
            right: 20px;
            top:20%;
            z-index:100;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            padding-top: 95px;
            >img{
                width: 116px;
                height: 116px;
                margin: 0 auto;
            }
            .slideNav{
                display: flex;
                flex-direction: column;
                >div{
                    width: 100%;
                    height: 37px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: bold;
                    margin: 5px 0;
                    background-position: center center;
                    background-repeat: no-repeat;
                    transition:all .3s;
                    transform-origin: 50% 50%;
                    cursor: pointer;
                    &:hover{
                        background-image: url('/static/images/menu-side-wrap.png');
                        background-size: 100px 32px;
                        transform: scale(1.2);
                        font-size: 14px;
                        font-weight: 700;

                    }
                }
            }
            .menu-aside-btns{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                >img{
                    height: 37px;
                    width: 122px;
                    margin-top: 10px;
                }
            }
        }
        footer{
            height: 390px;
            width: 100%;
            background: #333;
            position: relative;
            z-index: inherit;
        }
        
    }
    
</style>
<template>
    <div class="container" ref="page1">
        <div id="progressbar" ref="progress" :style="{height:h}"></div>
        <div id="scrollPath"></div>
        <header>
            <Header/>
        </header>

        <main>
            <Main />
        </main>

        <section>
            <img src="/static/images/menu-side-code.png" alt="">
            <div class="slideNav">
                <div @click="showld">首页</div>
                <div>新闻公告</div>
                <div>忍者资料</div>
                <div>赛事中心</div>
                <div>攻略中心</div>
            </div>
            <div class="menu-aside-btns">
                <img src="/static/images/menu-aside-btn1.png" alt="">
                <img src="/static/images/menu-aside-btn2.png" alt="">
            </div>
        </section>

        <footer>
            <Footer />
        </footer>
        
    </div>
</template>
<script>
import Header from '@/components/naruto/header/Header.vue'
import Main from '@/components/naruto/main/Main.vue'
import Footer from '@/components/naruto/footer/Footer.vue'
 // 2
import Vue from 'vue'
let component =  Vue.extend({
    template:`<div id="loadings" >{{msg}}</div>`,
    props:{
        msg:{
            type:String,
            default:'loading...'
        }
    }
})
function loading(msg){
    // const div = document.createElement('div')
    // div.setAttribute('id','loadings')
    // document.body.append(div)
    let ojbk = new component({
        props:{
            msg:{
                type:String,
                default:msg
            }
        }
    }).$mount()
    console.log(msg);
    // document.body.append(ojbk.$el)
    document.querySelector('.container').append(ojbk.$el)
    return ()=>{
        document.querySelector('.container').removeChild(document.getElementById('loadings'))
    }
}
Vue.prototype.$loads = loading

export default {
    
    mounted(){
        window.addEventListener('scroll',this.scrollfn,true)
        
    },
    data(){
        return{
            totalHeight : 0,
            h:'0%'
        }
    },
    methods:{
        scrollfn(){
               let totalHeight = document.body.scrollHeight - window.innerHeight
            // (滚动条滚过的距离/（页面总高度-页面可视区域）)*100 + '%'   
               this.h = (document.body.scrollTop/totalHeight)*100 +'%'
            //    console.log(document.body.scrollTop,'/',totalHeight);
            
        },
        showld(){
            const hide =  this.$loads('正在加载中。。。')
            setTimeout(()=>{
                hide()
                console.log('隐藏了');
            },2000)
        }
    },
    components: {
        Header,
        Main,
        Footer
    }
}
</script>
