import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    List,
    Button,
    Modal,
    WhiteSpace
    
}from 'antd-mobile'
import {resetUser} from '../../redux/actions'
import './mine.less'
 const Item = List.Item
 const Brifef = Item.Brief
class Mine extends Component {
    constructor(){
        super()
        this.state = {
            icon :null
        }
        this.List = []
        for (let i = 0; i < 20; i++) {
            this.List.push({
                title:'头像'+(i+1),
                icon: require(`../../assets/images/头像${i+1}.png`)
            })
        }
    }
    logout1 = ()=>{
        console.log('lougout')
        Modal.alert('退出','确认退出？',[
            {text:'取消'},
            {text:'确认',
            onPress:()=>{
                //清loaclstorage redux
                localStorage.removeItem('user')
                this.props.resetUser()
            }}
        ])
    }
    render(){
        const {user} = this.props 
        const avatar = this.List.filter(item =>user.avatar === item.title )
        console.log(avatar)

        return(
            <div style={{marginTop:50}}>
                <div className="infowarp">
                    <img src={avatar[0].icon} alt=""/>
                    <h3>{user.username}</h3>
                    <p>{user.type}</p>
                </div>
                <List renderHeader={() => '相关信息'} >
                    <Item multipleLine>
                        <Brifef>职位：{user.post}</Brifef>
                        <Brifef>简介：{user.info}</Brifef>
                        {user.salary?<Brifef>薪资：{user.salary}</Brifef>:null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Button type='warning' onClick={this.logout1} >退出登录</Button>
                </List>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {resetUser} 
)(Mine)