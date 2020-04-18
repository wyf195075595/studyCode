import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {
    WingBlank,
    WhiteSpace,
    Card,
} from 'antd-mobile'
import QueueAnim from 'rc-queue-anim' //添加动画效果

const Header = Card.Header
const Body = Card.Body
class UserList extends Component {
    test = ()=>{
        console.log('ok')
    }
    render(){
        const {userlist} = this.props
        return(
            <WingBlank  style={{marginBottom:50, marginTop:50}} >
                <QueueAnim type="scale" >
                {
                    userlist.map((item,index) =>
                    <div   key={item._id} onClick={() => this.props.history.push(`/chat/${item._id}`)}>
                        <WhiteSpace/>
                        <Card onClick={()=>console.log('llll')} >
                           <Header thumb ={item.avatar? require(`../../assets/images/${item.avatar}.png`):null}
                            extra = {item.username} />
                            <Body>
                                <div>职位：{item.post}</div>
                                <div>公司：{item.company?item.company:null}</div>
                                <div>月薪：{item.salary?item.salary:null}</div>
                                <div>描述：{item.info}</div>
                            </Body>
                        </Card>
                    </div>
                    )
                }
                <WhiteSpace/>
                </QueueAnim>
            </WingBlank>
        )
    }
}

export default withRouter(UserList)