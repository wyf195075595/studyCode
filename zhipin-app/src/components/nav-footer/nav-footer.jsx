import React,{Component} from 'react'
import  './navfooter.less'
import {withRouter} from 'react-router-dom'
import {
    TabBar
} from 'antd-mobile'

const Item  = TabBar.Item
class  NavFooter extends Component{
    render(){
        let {navList,unReadCount} = this.props
        // 过滤需要隐藏的
        navList = navList.filter(item => !item.hide)
        // this.props.location.pathnane,只有路由组件中可用路由方法
        //withRoute
        const path = this.props.location.pathname
        console.log(this.props)

        return (
            <TabBar className='fixed'>
                {
                    navList.map((item,index)=>
                        <Item key={index}
                            title={item.text}
                            badge={item.text==='消息'?unReadCount:null}
                            selected={path===item.path}
                            onPress={()=>{this.props.history.replace(item.path)}}
                            icon={{uri: require(`./images/${item.icon}.png`)}}
                            selectedIcon={{uri: require(`./images/${item.icon}-selected.png`)}}
                        />
                    )
                }
            </TabBar>
        )
    }
}
//向外暴露withRouter()包装产生组件
//内部会向该组件传入路由方法
export default withRouter(NavFooter)  