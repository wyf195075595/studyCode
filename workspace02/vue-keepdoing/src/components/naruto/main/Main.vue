<style  scoped  lang="less">
.middle{
    width:100%;
    height: 100%;
    position: relative;
    .banner{
        position: absolute;
        top:0;
        left: 0;
        z-index: 4;
    }
    .copyright{
        position: absolute;
        top:550px ;
        left: 100px;
        z-index: 8;
    }
    .section01{
        width: 100%;
        height: 1400px;
        background-image: url('/static/images/kv-fire.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
        position: relative;
        z-index: 5;
        display: flex;
        align-items: flex-end;
        padding-bottom: 240px;
        box-sizing: border-box;
        .part01{
            width: 1324px;
            height: 450px;
            background-image: url('/static/images/part1-bannner.png');
            background-repeat: no-repeat;
            background-size: cover;
            margin: -50px auto 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .part01-left{
                margin-top: 63px;
                margin-left: 50px;
                width: 796px;
                height: 342px;

            }
            .part01-right{
                width: 382px;
                height: 340px;
                margin-top: 63px;
                margin-right: 70px;
                display: flex;
                flex-direction: column;
                .slideWarp{
                    width: 100%;
                    height: 51px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: flex-start;
                    border-bottom: 1px solid orange;
                    .part01-active{
                        background-image: url('/static/images/newsInfo-tab-active.png');
                        background-size: contain;
                        color: white !important;
                    }
                    .slide{
                        width: 76px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color:#534334;
                        font-size:16px;
                        font-weight: bold;
                        cursor: pointer;
                        &:hover{
                            background-image: url('/static/images/newsInfo-tab-active.png');
                            background-size: contain;
                            color: white;
                        }
                        &:last-child{
                            background-image:none!important;
                        }
                        .part01-more{
                            width: 47px;
                            height: 20px;
                            display: inline-block;
                            background-image: url('/static/images/newInfo-tab-more.png');
                            background-repeat: no-repeat;
                            background-position: center right;
                            background-size: cover;
                        }
                    }
                }
                .slideContent{
                    height: 100%;
                    width: 100%;
                    .topNews{
                        height: 72px;
                        width: 100%;
                        border: 1px solid orange;
                        background: burlywood;
                        box-sizing: border-box;
                        margin-top: 10px;
                        padding: 10px 0;
                        display: flex;
                        align-items: center;
                        .topNews-left{
                            padding: 0 5px;
                            box-sizing: border-box;
                            img{
                                transform: scale(0.9);
                                vertical-align: middle;
                            }
                        }
                        .topNews-right{
                            display: flex;
                            flex-direction: column;
                            font-size: 16px;
                            font-weight: bold;
                            letter-spacing: 1px;
                            color: #973612;
                            box-sizing: border-box;
                            >p:last-child{
                                text-align: right;
                                color: #9b8b78;
                                font-size: 14px;
                            }
                        }
                        
                    }
                    .news-list{
                        .lists{
                            height: 22px;
                            width: 100%;
                            margin-top: 18px;
                            display: flex;
                            cursor: pointer;
                            &:hover .lists-hover{
                                color: red;
                            }
                            >div:first-child{
                                width: 52px;
                                height: 100%;
                                text-align: center;
                                color: #fbf6ea!important;
                                background-color: #534334;
                                border-radius: 4px;
                                font-size: 14px;
                            }
                            >div:nth-child(2){
                                flex: 1;
                                max-width: 230px;
                                font-size: 14px;
                                padding:0 6px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            >div:last-child{
                                width: 78px;
                                color: #9b8b78;
                                font-size: 14px;
                            }
                            
                        }
                    }
                    .tagsWarp{
                        margin-top:20px;
                        display: flex;
                        align-items: center;
                        >img{
                            margin-right:15px;
                        }
                    }
                }
                
            }
        }
        
    }
    .section02{
        width: 100%;
        height: 2620px;
        background-image: url('/static/images/bg02.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        .part02{
            .part02-title{
                margin: 0 auto;
                width: 276px;
                height: 56px;
                background: url('/static/images/part1-tit.png') no-repeat center /auto 100%;
            }
            .part02-tabs{
                width: 1350px;
                height: 42px;
                margin: 0 auto;
                .tabswarp{
                    width: 344px;
                    height: 42px;
                    margin: 30px auto 0;
                    display: flex;
                    background: chocolate;
                    justify-content: space-around;
                    align-items: center;
                    background: url('/static/images/part1-tab-wrap.png') no-repeat center /100% 100% ;
                    div{
                        width: 100px;
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                    }
                    .part02-active{
                        background: url('/static/images/part1-tab-active.png') no-repeat center /100% 100% ;
                    }
                }
                
            }
            .part02-lb{
                width: 1215px;
                height: 612px;
                margin: 6px auto 0;
                .part02-lb-item{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .lb-sidel,.lb-sider{
                        width: 172px;
                        height:364px ;
                        background: url('/static/images/part1-side-box.png') no-repeat center /100% 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        padding-top: 30px;
                        box-sizing: border-box;
                        .rolewarp{
                            width: 84px;
                            height: 84px;
                            background: url('/static/images/part1-role-wrap.png') no-repeat center /100% 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .imgwarp{
                                    background: #c5a468;
                                    border: 1px solid #ffffff;
                                    overflow: hidden;
                                    box-sizing: border-box;
                                    width: 70px;
                                    height: 70px;
                                     img{
                                        width: 68px;
                                        height: 68px;
                                    }
                            }
                           
                        }
                        .namewarp{
                            writing-mode: vertical-rl;
                            margin-top: 10px;
                            p{
                                font-size: 28px;
                                /* font-weight: bold; */
                                line-height: 28px;
                                letter-spacing: 6px;
                                color: #000;
                                text-align: center;
                                &:nth-child(1){
                                    font-size: 18px;
                                    font-weight: bold;
                                    line-height: 28px;
                                    letter-spacing: 4px;
                                }
                            }
                        }
                    }
                    .lb-sidem{
                        width: 783px;
                        height:402px ;
                        background: url('/static/images/part1-slide-box.png') no-repeat center /100% 100%;
                        padding: 30px 60px 0;
                        box-sizing: border-box;
                        position: relative;
                        >img{
                            position: absolute;
                            top: -110px;
                            right: 0;
                        }
                        .roleTag{
                            position: absolute;
                            top: -100px;
                            right: 0;
                            width: 81px;
                            height: 195px;
                            background: url('/static/images/part1-name-tag.png') no-repeat center /100% 100%;
                            writing-mode:vertical-lr;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            p{
                                font-size: 21px;
                                letter-spacing: 4px;
                                color: #ffffff;
                                &:first-child{
                                    font-weight: bold;
                                }
                            }
                        }
                        .jnbox{
                            display: flex;
                            width: 260px;
                            justify-content: space-around;
                            margin-top: 17px;
                            img{
                                width: 64px;
                                height: 64px;
                            }
                        }
                        .disc{
                            h5{
                                font-size: 22px;
                                color: #221815;
                                margin: 10px 0 3px;
                            }
                            p{
                                width: 260px;
                                color: #180b08;
                                font-size: 14px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                line-height: 24px;
                            }
                            .todetail{
                                color: #aa3c26;
                                font-size: 12px;
                                display: inline-block;
                                width: 260px;
                                text-align: right;
                            }
                        }
                    }
                }
            }
        }
        
    }
    // 轮播图2标设置
    /deep/.part01-left  {
            .el-carousel__indicators--horizontal{
                width: 796px;
                bottom: 0;
                left: 0;
                display: flex;
                transform: none;
                .el-carousel__indicator--horizontal{
                    width: 25%;
                    display: inline-block;
                    height: 30px;
                    background: rgba(0,0,0,0.5);
                    &:nth-child(1):after{
                        content: '冠军荒芜';
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        color:white;
                    }
                    &:nth-child(2):after{
                        content: '联动开启';
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        color:white;
                    }
                    &:nth-child(3):after{
                        content: '召集令';
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        color:white;

                    }
                    &:nth-child(4):after{
                        content: '五局一分钟';
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        color:white;
                    }
                    &:not(:last-child){
                        border-right: 1px solid white;
                    }
                    .el-carousel__button{
                        display: none;
                    }
                }
            }
    }
    // 轮播图2标设置
    /deep/.part02-lb  {
        .el-carousel__arrow{
            width: 80px;
            height: 80px;
        }
        .el-carousel__arrow--left{
            background: url('/static/images/btn-prev.png') no-repeat center / 100% 100%;
            left: 15% !important;
        }
        .el-carousel__arrow--right{
            right: 15% !important;
            background: url('/static/images/btn-next.png') no-repeat center / 100% 100%;

        }
    }
    // 更多
    .findMore{
        width: 290px;
        height: 54px;
        margin: 20px auto 0;
        background: url('/static/images/part1-btn-more-ninja.png') no-repeat center /auto 100%;
        animation: mainscale  1s linear infinite alternate;
    }
    @keyframes mainscale {
        0%{}
        100%{transform: scale(1.2 );}
    }
}
</style>
<template>
    <div class="middle">
            <img class="copyright" src="/static/images/hyrz-copyright.png" alt="">
            <img class="banner" src="/static/images/banner.png" alt="">
        <div class="section01">
            <!-- part01 -->
            <div class="part01">
                <!-- 轮播图 -->
                <div class="part01-left">
                    <el-carousel height="340px" width='796px' arrow="none">
                        <el-carousel-item >
                            <img class="banner" src="/static/images/lbpic1.jpg" alt="">
                        </el-carousel-item>
                        <el-carousel-item >
                            <img class="banner" src="/static/images/lbpic2.jpg" alt="">
                        </el-carousel-item>
                        <el-carousel-item >
                            <img class="banner" src="/static/images/lbpic3.jpg" alt="">
                        </el-carousel-item>
                        <el-carousel-item >
                            <img class="banner" src="/static/images/lbpic4.jpg" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- tab切换 -->
                <div class="part01-right">
                    <div class="slideWarp" @mouseover="part01tabs">
                        <div :class="['slide' ,tab01==0?'part01-active':'']" data-index="zx">最新</div>
                        <div :class="['slide' ,tab01==1?'part01-active':'']" data-index="gg">公告</div>
                        <div :class="['slide' ,tab01==2?'part01-active':'']" data-index="xw">新闻</div>
                        <div :class="['slide' ,tab01==3?'part01-active':'']" data-index="hd">活动</div>
                        <div class="slide">
                            <span class="part01-more"></span>
                        </div>
                    </div>
                    <div class="slideContent" v-loading = "isLoading" >
                        <div class="topNews" v-if="filterData">
                            <div class="topNews-left">
                                <img src="/static/images/news-notice-icon.png" alt="">
                            </div>
                            <div class="topNews-right">
                                <p class="right-title">{{filterData.topNews.context}}</p>
                                <p class="right-time">{{filterData.topNews.time}}</p>
                            </div>
                        </div>
                        <div class="news-list"  v-if="filterData">
                            <div class="lists" v-for="(item,index) in filterData.zx" :key="index">
                                <div>{{filterData.type}}</div>
                                <div class="lists-hover">{{item.context}}</div>
                                <div class="lists-hover">{{item.time}}</div>
                            </div>
                       
                        </div>
                        <div class="tagsWarp">
                            <img :src="tab01==0?gy[0]:gy[1]" alt="">
                            <img :src="tab01==1?gy[0]:gy[1]" alt="">
                            <img :src="tab01==2?gy[0]:gy[1]" alt="">
                            <img :src="tab01==3?gy[0]:gy[1]" alt="">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="section02">
            <!-- part01 -->
            <div class="part02">
                <div class="part02-title"></div>
                <div class="part02-tabs">
                    <div class="tabswarp">
                        <div class="tabs part02-active">新忍者</div>
                        <div class="tabs">热门忍者</div>
                        <div class="tabs">高招忍者</div>
                    </div>
                </div>
                <!-- 轮播图2 -->
                <div class="part02-lb">
                    <el-carousel height="612px" width='1215px' indicator-position='none' :loop = false>
                        <el-carousel-item v-for="(item,index) in rzzl" :key="index">
                            <div class="part02-lb-item">
                                <div class="lb-sidel">
                                    <div class="rolewarp">
                                        <div class="imgwarp">
                                            <img :src="item.left.role" alt="">
                                        </div>
                                    </div>
                                    <div class="namewarp">
                                        <p>{{item.left.name2}}</p>
                                        <p>{{item.left.name1}}</p>
                                    </div>
                                </div>
                                <div class="lb-sidem">
                                    <img :src="item.middle.img" alt="">
                                    <div class="roleTag">
                                        <p>{{item.middle.name2}}</p>
                                        <p>{{item.middle.name1}}</p>
                                    </div>
                                    <div class="videowarp"><img :src="item.middle.gif" alt=""></div>
                                    <div class="jnbox">
                                        <div v-for="items in item.middle.jnimg" :key="items"><img :src="items" alt=""></div>
                                    </div>
                                    <div class="disc">
                                        <h5>{{item.middle.jnname[0]}}</h5>
                                        <p>{{item.middle.jndisc[0]}}</p>
                                        <span class="todetail">【详情】</span>
                                    </div>
                                </div>
                                <div class="lb-sider">
                                    <div class="rolewarp">
                                        <div class="imgwarp">
                                            <img :src="item.right.role" alt="">
                                        </div>
                                    </div>
                                    <div class="namewarp">
                                        <p>{{item.right.name2}}</p>
                                        <p>{{item.right.name1}}</p>
                                    </div>
                                </div>
                            </div>
                        </el-carousel-item>

                    </el-carousel>
                </div>
                <div class="findMore">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            rzzl:[
                {
                    left:{name1:'纲手',name2:'﹁百豪﹂',role:'/static/images/gs.png'},
                    right:{name1:'漩涡鸣人',name2:'﹁九尾查克拉﹂',role:'/static/images/xwmr.png'},
                    middle:{gif:'/static/images/zmm.gif',img:'/static/images/zmm.png',name1:'照美冥',name2:'﹁夏日泳装﹂',
                        jnimg:['/static/images/zmmjn01.png','/static/images/zmmjn02.png','/static/images/zmmjn03.png'],
                        jnname:['水遁·水阵柱','水遁·水弹之术','水遁·水龙弹之术'],
                        jndisc:[' 照美冥操纵附近的水分，制造出可以抵挡敌人攻击的水柱，也可以利用水流攻击敌人，在强化状态下，水柱会变为圆筒形水围墙。','照美冥高速奔跑，之后停下来向前方喷出水流对敌人造成伤害，在强化状态下，照美冥在喷出水流的同时也会吐出大量雾气遮蔽对方视线。','照美冥用水龙卷将对方卷至空中，之后以水凝聚为龙形态将对方咬至空中。']
                    }
                },
                {
                    left:{name1:'照美冥',name2:'﹁夏日泳装﹂',role:'/static/images/zmm.png'},
                    right:{name1:'纲手',name2:'﹁百豪﹂',role:'/static/images/gs.png'},
                    middle:{gif:'/static/images/jm.gif',img:'/static/images/jm.png',name1:'漩涡鸣人',name2:'﹁九尾查克拉﹂',
                        jnimg:['/static/images/jm-jn-1.png','/static/images/jm-jn-2.png','/static/images/jm-jn-3.png'],
                        jnname:['惑星螺旋丸','尾兽闪光弹','大玉螺旋多连丸'],
                        jndisc:[' 鸣人使用一只手同时控制四个螺旋丸，四个螺旋丸分别往不同方向旋转，产生乱回转，威力强大。(点击普通攻击，可以使用查克拉手臂把敌人推远)，当鸣人处于空中时：点击二技能加方向键上，可使用大玉螺旋丸，冷却时间为6秒，鸣人使用四只查克拉手臂，制造出一个大玉螺旋丸，攻击敌人。当鸣人处于空中时：点击二技能加方向键下，可使用螺旋吸丸，冷却时间为13秒，鸣人首先制造出一个大玉螺旋丸，再用查克拉之手把周围敌人拉过来进行攻击。 当鸣人处于空中时：点击二技能可使用多重螺旋丸，冷却时间为6秒，鸣人使用查克拉手臂制造出多个螺旋丸，然后一起向敌人发动攻击。',' 漩涡鸣人「九尾查克拉」瞬身快速向前突进，随后对敌人发起连续的攻击。','鸣人使用多重影分身之术制作出多个分身，分身同时对敌人发动攻击。最后本体和分身同时使用大玉螺旋丸终结敌人。']
                    }
                },
                {
                    left:{name1:'漩涡鸣人',name2:'﹁九尾查克拉﹂',role:'/static/images/xwmr.png'},
                    right:{name1:'照美冥',name2:'﹁夏日泳装﹂',role:'/static/images/zmm.png'},
                    middle:{gif:'/static/images/gs.gif',img:'/static/images/qsgs.png',name1:'纲手',name2:'﹁百豪﹂',
                        jnimg:['/static/images/gs-jn-01.png','/static/images/gs-jn-02.png','/static/images/gs-jn-03.png'],
                        jnname:['金豪拳','怪力','水遁·水龙弹之术痛天脚·极乐净土'],
                        jndisc:['将查克拉聚集在手部，随后向前方进行强力的一击。长按技能键时会检测是否遇到墙体，遇到则会触发弹墙跳跃，跳跃时按普攻键将会斜向向地面打出一拳；同样在跳跃时长按普攻键会再次检测是否遇到墙体，遇到触发第二次弹墙跳跃，跳跃时按普攻键将会垂直向地面打出一拳。可以在空中释放技能，空中释放技能直接斜向向地面打出一拳。','精确的控制查克拉，自身起跳然后从天而降抓住敌人，再进行一次抱摔。抱摔后按住普攻键会将敌人扔出，若扔出的敌人触碰到墙体，此时使用金豪拳将直接出现在敌人上空向地面打出垂直一拳！可以在空中释放技能；每次弹墙跳跃后使用怪力技能将增加一次抱摔的次数！','将查克拉聚集在脚部，向前方进行一次下压的重脚空袭，受到攻击的敌人将被震至空中同时地面溅起大量石块。纲手起跳穿越石块向敌人打出威力巨大的一拳！']
                    }
                }
            ],//忍者资料
            tab01:0,//parto01切换
            news:[],
            gy:['/static/images/icon-gy-active.png','/static/images/icon-gy.png'],//勾玉
            // news:,
            filterData:'',
            isLoading:false
        }
    },
    mounted(){
        this.isLoading = true
        setTimeout(()=>{
            this.news = [
                    {   
                        type:'最新',
                        topNews:{time:'2020-07-14',context:'【大神访谈】人狠话不多，新晋冠军荒芜的夺冠秘诀！'},
                        zx:[
                            {context:'“新人王”荒芜登顶忍界！第十六届无差别大赛圆满落幕',time:'2020-07-12'},
                            {context:'观赛领金鸣！十六届无差别决赛今日18:00开赛',time:'2020-07-11'},
                            {context:'倒计时1天！《火影忍者》手游第16届无差别决赛7月11日开战！',time:'2020-07-10'},
                            {context:'《火影忍者》手游x泡泡玛特联动开启！',time:'2020-07-10'},
                        ]
                    },
                    {   
                            type:'公告',
                            topNews:{time:'2020-07-9',context:'7月9日更新公告 漩涡鸣人[九尾查克拉]上架高级招募'},
                            zx:[
                                {context:'7月9日异常修复及优化公告',time:'2020-07-9'},
                                {context:'7月8日新版本停机更新公告',time:'2020-07-8'},
                                {context:'7月2日更新公告 幸运夺宝开启',time:'2020-07-2'},
                                {context:'6月25日更新公告 极限挑战开启',time:'2020-06-25'},
                            ]
                    },
                    {   
                            type:'新闻',
                            topNews:{time:'2020-07-14',context:'【大神访谈】人狠话不多，新晋冠军荒芜的夺冠秘诀！'},
                            zx:[
                                {context:'“新人王”荒芜登顶忍界！第十六届无差别大赛圆满落幕',time:'2020-07-12'},
                                {context:'倒计时1天！《火影忍者》手游第16届无差别决赛7月11日开战！',time:'2020-07-10'},
                                {context:'《火影忍者》手游x泡泡玛特联动开启！',time:'2020-07-10'},
                                {context:'7月9日更新公告 漩涡鸣人[九尾查克拉]上架高级招募',time:'2020-07-9'},
                            ]
                    },
                    {   
                            type:'活动',
                            topNews:{time:'2020-07-11',context:'观赛领金鸣！十六届无差别决赛今日18:00开赛'},
                            zx:[
                                {context:'倒计时1天！《火影忍者》手游第16届无差别决赛7月11日开战！',time:'2020-07-10'},
                                {context:'倒计时3天！决赛八强对阵揭晓，赛事竞猜火热进行中',time:'2020-07-8'},
                                {context:'八强公布 第十六届无差别总决赛7月11日18:00打响',time:'2020-07-3'},
                                {context:'冲击决赛资格 第十六届无差别赛事淘汰赛正式启动！',time:'2020-06-23'},
                            ]
                    },
            ];
            this.isLoading = false
            this.getFilterData(this.tab01)
        
        },3000)
        
    },
    watch:{
        tab01:function(n,o){
            this.getFilterData(n)
        }
    },
    methods:{
        // part01 tab切换
         part01tabs(e){
             switch(e.target.getAttribute('data-index')){
                case 'zx':
                    console.log(1);
                    this.tab01 = 0
                break;
                case 'gg':
                    console.log(2);
                    this.tab01 = 1
                break;
                case 'xw':
                    console.log(3);
                    this.tab01 = 2
                break;
                case 'hd':
                    console.log(4);
                    this.tab01 = 3
                break;
                default:break;
             }
            
        },
        // part01数据过滤
        getFilterData(flag){
                this.filterData = this.news[flag]
        }
    }
}
</script>
