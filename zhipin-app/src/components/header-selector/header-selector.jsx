// 老大神容详情
import React,{Component} from 'react'

import {
    List,
    Grid
} from 'antd-mobile'
export default class dashenInfo extends Component{
   constructor(){
       super()
       this.state = {
           icon :null
       }
       this.headerList = []
       for (let i = 0; i < 20; i++) {
           this.headerList.push({
               title:'头像'+(i+1),
               icon: require(`./images/头像${i+1}.png`)
           })
       }
   }
//    
   avatarSelector = (e)=>{
    if(e.icon){
        this.setState({
            icon : e.icon
        })
        this.props.setAvatar(e.title)
    }
    
   }
    render(){
        // 头部上标题
        const listHeader = this.state.icon?(<div><span>已选择头像</span><img style={{verticalAlign:'middle',margin:'0 5px'}} alt='' src={this.state.icon}></img> </div>):'请选择头像'
        return(
            <List renderHeader={()=>listHeader} >
                <Grid data={this.headerList} columnNum='5' onClick={this.avatarSelector}></Grid>
            </List>
        )
    }
}
