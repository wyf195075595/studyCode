<style  scoped  lang="less">
.headbox{
    position: relative;
    .header{
        width:100%;
        height: 90px;
        background-image: url(/static/images/menu-top.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        z-index: 10;
        nav{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            .nav-left{
                width: 277px;
                height: 100%;
                position: absolute;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                img{
                    transform: translateY(12px);
                }
                .nav-title{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-left: 20px;
                    // justify-content: flex-start;
                    h1{                        
                        color: #e4e4e4;
                        font-size: 26px;
                        margin: 8px 0 2px 0;
                    }
                    p{
                        font-size: 12px;
                        color: #929292;
                        text-align: left;
                        width: 100%;
                    }
                }   
            }
            .nav-middle{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                span{
                    padding: 0 20px;
                    font-size: 16px;
                    display: block;
                    color: #f5e3b9;
                    transition: all .3s;
                    cursor: pointer;
                    &:hover{
                        color: #e2482c;
                    }
                }
            }
            .nav-right{
                // width: 100px;
                height: 100%;
                position: absolute;
                right: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    margin-right:5px;
                }
            }
            
        }
    }
    .dropDwonImg{
        position: absolute;
        z-index: 5;
        top: 100%;
        left: 34%;
        transform: translateY(-100%);
        transition: all .5s;
    }
}
</style>
<template>
<div class="headbox">
    <div class="header">
        <nav>
            <div class="nav-left">
                <img src="/static/images/logo.png" alt="">
                <div class="nav-title">
                    <h1>火影忍者手游</h1>
                    <p>正版授权格斗手游</p>
                </div>
            </div>
            <div class="nav-middle">
                <span>首页</span>
                <span>资讯</span>
                <span @click="update">忍者站</span>
                <span v-loading="isupdata">赛事中心</span>
                <span @click="open">攻略</span>
                <span @mouseenter="enter" @mouseleave="leave">社区</span>
                <span>CDKEY兑换</span>
            </div>
            <div class="nav-right">
                <img src="/static/images/nav-btn-download.png" alt="">
                <img src="/static/images/nav-btn-call.png" alt="">
            </div>
            
        </nav>
    </div>
    <div class="dropDwonImg" ref="dwImg">
        <img src="/static/images/nav-down-menu.png" alt="">
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            isupdata:false
        }
    },
    methods:{
        enter(){
            this.$refs.dwImg.style.transform = 'translateY(0)'
        },
        leave(){
            this.$refs.dwImg.style.transform = 'translateY(-100%)'
        },
        open(){
            this.$dialog({
                outerVisible: true,
                content:{title:'我是标题',info:`<p><strong>我是内容</strong></p>`}
            })
        },
        update(){
            this.isupdata = true
            setTimeout(()=>{
                alert('加载完成！')
                this.isupdata = false
            },3000)
        }
    }
}
</script>
