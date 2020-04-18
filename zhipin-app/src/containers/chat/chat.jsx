import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    NavBar,
     List,
      InputItem,
    //  Grid,
      Icon} from 'antd-mobile'
import QueueAnim from 'rc-queue-anim' //添加动画效果
import './chat.css'
import {sendMsg,readMsg} from '../../redux/actions'
const Item = List.Item

// const targetIcon = Icon.targetIcon
class Chat extends Component {
    state = {
        isShow:false,
        content:''
    }
    handleSend = ()=>{
        const to = this.props.match.params.userId
        const from = this.props.user._id
        const content = this.state.content.trim()
        // console.log(to,from,content)
        // 发送消息方法
        if(content){
            this.props.sendMsg({to,from,content})
            this.setState({content:''})
        }
    }
    componentDidMount(){
        // 初始化下显示列表
        window.scrollTo(0,document.body.scrollHeight)

    }
    componentDidUpdate(){
        // 更新列表显示
        window.scrollTo(0,document.body.scrollHeight)
    }
    componentWillMount(){
        const from = this.props.match.params.userId
        const to = this.props.user._id
        // 更新未读消息数量
        this.props.readMsg(from,to)
    }
    render(){
        const {user} = this.props
        const {users,chats} = this.props.chat  //需要过滤 byid
        const myid = user._id
        const targetid = this.props.match.params.userId
        if(!users[myid]) { // 如果还没有获取数据, 直接不做任何显示
            return null
        }
        var chatId = [myid,targetid].sort().join('_')
     
        const msgs = chats.filter(msg =>msg.chat_id === chatId )
        
        // 得到目标用户的header图片对象
        const targetHeader = users[targetid].avatar
        const targetIcon = targetHeader ? require(`../../assets/images/${targetHeader}.png`) : null
        return (
            <div id='chat-page'>
                <NavBar
                style={{position:"fixed",top:'0',width:'100%',zIndex:99}}
                icon={<Icon type='left'/>}
                className='sticky-header'
                onLeftClick={()=> this.props.history.goBack()}
                >
                {users[targetid].username}
                </NavBar>

                <List style={{marginTop:50, marginBottom: 50}}>
                {/*alpha left right top bottom scale scaleBig scaleX scaleY*/}
                <QueueAnim type='left' delay={100}>
                    {
                     msgs.map(item =>{
                        if(item.from === user._id){
                             return(
                                <Item
                                key = {item._id}
                                className='chat-me'
                                extra='我'
                                >
                                {item.content}
                                </Item>
                             )
                        }else{
                            return (
                                <Item
                                key = {item._id}
                                thumb={targetIcon}
                                >
                                {item.content}
                                </Item>

                            )
                        }
                     })   
                    }
                            
                </QueueAnim>

                </List>

                <div className='am-tab-bar'>
                <InputItem
                    placeholder="请输入"
                    value={this.state.content}
                    onChange={val => this.setState({content: val})}
                    onFocus={() => this.setState({isShow: false})}
                    extra={
                    <span>
                        <span onClick={()=>console.log('选择表情包')} style={{marginRight:5}} >😊</span>
                        <span onClick={this.handleSend}>发送</span>
                    </span>
                    }
                />
                </div>
            </div>
        )
    }
}
 
export default connect(
    state=>({user:state.user,chat:state.chat}),
    {sendMsg,readMsg}
)(Chat) 