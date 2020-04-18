/*
 登陆路由组件
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'
import Logo from '../../components/logo/logo'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Toast,
    Button
} from 'antd-mobile'

import  './login.less'

class Login extends Component {

    state = {
        username:'',
        pwd:''
    }
    handleChange(name,val){//属性名，属性值
        this.setState({
            [name]:val, //属性名不是name而是它的值：[name]表示其值
        })

    }
    sign = ()=>{
        console.log(this.state);
        this.props.login(this.state)
    }
    toRegister = ()=>{
        this.props.history.push('/register')
    }
    render(){
         // 如果redirectTo有值, 就需要重定向到指定的路由
         const {redirectTo,msg} = this.props.user
         if(msg){
             Toast.info(msg,1)
         }
         if(redirectTo) {
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
                        <InputItem clear placeholder="4-16个字符" type="password"   onChange={val=>this.handleChange('pwd',val)}>密&nbsp;&nbsp;&nbsp;码</InputItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.sign}>登陆</Button>
                        <WhiteSpace />
                        <Button onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state=>({user:state.user}),
    {login}
)(Login)