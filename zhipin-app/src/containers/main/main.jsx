/*
 主界面路由组件
 */
import React,{Component} from 'react'
import {Route,Switch, Redirect}  from 'react-router-dom'
import {connect} from 'react-redux'
import laobanInfo from '../laoban-info/laoban-info'
import dashenInfo from '../dashen-info/dashen-info'
import {getuserInfo} from '../../redux/actions'
import {getRedirectTo} from '../../utils'
import {
    NavBar,

} from 'antd-mobile'
import Dashen from '../../containers/dashen/dashen'
import Laoban from '../../containers/laoban/laoban'
import Message from '../../containers/message/message'
import Mine from '../../containers/mine/mine'
import notfound from '../../components/notfound/notfound'
import NavFooter from '../../components/nav-footer/nav-footer'
import Chat from '../chat/chat'
class Main extends Component {
    navList = [
        {
            path:'/laoban',
            component:Laoban,
            title:'大神列表',
            icon:'laoban',
            text:'大神'
        },
        {
            path:'/dashen',
            component:Dashen,
            title:'老板列表',
            icon:'dashen',
            text:'老板'
        },
        {
            path:'/message',
            component:Message,
            title:'消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/mine',
            component:Mine,
            title:'用户中心',
            icon:'personal',
            text:'我的'
        }
    ]
    componentDidMount(){
        // 如果local storage中有，redux中没有
        let localuser = JSON.parse(localStorage.getItem('user')) 
        const {_id} = this.props.user
        if(localuser && !_id){
            // 请求后台数据
            console.log('发送ajax',localuser._id)
            this.props.getuserInfo(localuser._id)
        }
    }
    componentWillUpdate(){
         // 读本地localstroage
         let localuser = JSON.parse(localStorage.getItem('user'))
         if(!localuser){
             return <Redirect to='/login' />
         }
    }
    render(){
        // 检查用户是否登陆
        // 读本地localstroage
        let localuser = JSON.parse(localStorage.getItem('user'))
        if(!localuser){
            return <Redirect to='/login' />
        }
        const {user,unReadCount} = this.props
        if(!user._id){//redux中没有user._id
            return null
        }else{//如果有_id,显示对应界面
            let path = this.props.location.pathname  //获取当请求前路由地址
            if(path === '/'){
                //得到一个重定向的路由路径
                path = getRedirectTo(user.type,user.avatar)
                return <Redirect to={path} />
            }
        }
        const {navList} = this
        const path = this.props.location.pathname
        const curNav = navList.find(item=> item.path===path) //返回Nav对象
        if(curNav){
            if(user.type === 'dashen'){
                // 需要隐藏laoban,添加hide熟悉
                navList[0].hide = true
            }else{
                // 需要隐藏dashen,添加hide熟悉
                navList[1].hide = true

            }
        }
        return (
            <div>
                {curNav?<NavBar style={{position:"fixed",top:'0',width:'100%',zIndex:99}}>{curNav.title}</NavBar>:null}
                <Switch>
                    {
                        navList.map(item=><Route key={item.path} path={item.path} component={item.component}></Route>) 
                    }
                    <Route path="/dashenInfo" component={dashenInfo}></Route>
                    <Route path="/laobanInfo" component={laobanInfo}></Route>
                    <Route path="/chat/:userId" component={Chat}></Route>
                    <Route component={notfound} />
                  
                </Switch>
                {curNav ? <NavFooter navList={navList} unReadCount={unReadCount} /> : null}

            </div>
        )
    }
}
export default  connect(
    state=>({user: state.user,unReadCount:state.chat.unReadCount}),
    {getuserInfo}
)(Main)