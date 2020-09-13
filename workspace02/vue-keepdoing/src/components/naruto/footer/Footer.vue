<style  scoped  lang="less">
.footBox{
    width: 100%;
    height: 100%;
    background: url('/static/images/botbg.png');
    .service{
        width: 750px;
        height: 190px;
        margin: 0 auto;
        display: flex;
        padding-top: 40px;
        box-sizing: border-box;
        >div{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            i{
                font-size: 44px;
                color: white;
            }
            >p{
                &:nth-child(2){
                    font-size: 18px;
                    color: white;
                }
                &:nth-child(3){
                    font-size: 12px;
                    color: #ccc;
                }
            }
            
        }
    }
    .about{
        width: 1050px;
        height: 172px;
        margin: 0 auto;
        display: flex;
        font-size: 12px;
        color: #ccc;
        .a-left{
            >div{
                width: 100%;
                height: 50px;
                background-image: url('/static/images/foot_logo.png');
                background-repeat: no-repeat;
                background-size: contain;
                background-position: 140px 0;
                transform: translateX(-140px);
            }
        }
    }
}
</style>
<template>
    <div class="footBox">
        <div class="service">
            <div>
                <div><i class="el-icon-download"></i></div>
                <p>游戏下载</p>
                <p>游戏最新版本下载</p>
            </div>
            <div>
                <div><i class="el-icon-phone-outline"></i></div>
                <p>游戏下载</p>
                <p>游戏最新版本下载</p>
            </div>
            <div>
                <div><i class="el-icon-service"></i></div>
                <p>火影手游客服专线</p>
                <p>盗号、举报、谩骂</p>
            </div>
        </div>
        <div class="about">
            <div class="a-left">
                <div></div>
                <p>腾讯互动娱乐魔方工作室BANDAI NAMCO本网络游戏适合9周岁以上的用户使用；</p>
                <p>为了您的健康，请合理控制游戏时间。</p>
                <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
            </div>
            <div class="a-right">
                <p>腾讯互动娱乐|服务条款|隐私保护指引|儿童隐私保护指引|腾讯游戏招聘|腾讯游戏客服|游戏列表|广告服务及商务合作</p>
                <p>© 2002 MASASHI KISHIMOTO / 2007 SHIPPUDEN All Rights Reserved.</p>
                <p>© 2002 MASASHI KISHIMOTO / 2017 BORUTO All Rights Reserved.</p>
                <p>© BANDAI NAMCO Entertainment Inc.</p>
                <p>COPYRIGHT © 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.</p>
                <p>深圳市市场监督管理局企业主体身份公示工商网监电子标识 |粤网文[2017]6138-1456号|（总）网出证（粤）字第057号</p>
                <p>文网游进字〔2016〕0035 号文网游进字〔2016〕0035 号|ISBN 978-7-7979-8725-7|新广出审[2017]5565号|全国文化市场统一举报电话：12318</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
