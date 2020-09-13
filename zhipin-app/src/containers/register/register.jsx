/*
 登陆路由组件
 */
import React,{Component} from 'react'
import {connect} from 'react-redux' //包装成容器组件,使其可以与redux关联以便获取数据
import {register} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/logo/logo'
import {
    NavBar,
    WingBlank,
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button,
    Toast
} from 'antd-mobile'

import  './register.less'
const ListItem = List.Item

class Register extends Component {
    state = {
        username:'',
        pwd:'',
        rpwd:'',
        type:'dashen'
    }
    handleChange(name,val){//属性名，属性值
        this.setState({
            [name]:val, //属性名不是name而是它的值：[name]表示其值
        })

    }
    submit = ()=>{
        console.log(this.state)
        this.props.register(this.state)
    }
    toLogin = ()=>{
        this.props.history.push('/login')
    }
    render(){
        const {type} = this.state
        // 如果redirectTo有值, 就需要重定向到指定的路由
        const {redirectTo,msg} = this.props.user
        if(msg){
            Toast.info(msg,1)
        }
        if(redirectTo) {
            console.log("redirect" , redirectTo)
            return <Redirect to={redirectTo}/>
        }
        
        return (
            <div className="loginwarp">
                <NavBar mode="dark">呵呵直聘</NavBar>
                <Logo/>
                <WhiteSpace />
                {/* 表单 */}
                <WingBlank>
                    <List>
                        <InputItem clear placeholder="2-8个字符"  onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem clear placeholder="4-16个字符" type="password" onChange={val=>this.handleChange('pwd',val)}>密&nbsp;&nbsp;&nbsp;码</InputItem>
                        <WhiteSpace />
                        <InputItem clear placeholder="4-16个字符" type="password" onChange={val=>this.handleChange('rpwd',val)} >确认密码</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span className="types">用户类型</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio className="my-radio" checked={type === 'dashen'} onChange={val=>this.handleChange('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio className="my-radio" checked={type === 'laoban'} onChange={val=>{this.handleChange('type','laoban')}}>boss</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.submit}>注册</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state=>({user: state.user}),
    {register}
)(Register)