// 老大神容详情
import React,{Component} from 'react'
import {connect}  from 'react-redux'
import {Redirect} from 'react-router-dom'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'
import {updateuserinfo} from '../../redux/actions'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    Toast
} from 'antd-mobile'


class dashenInfo extends Component{
    state = {
        avatar:'',
        post:'',
        info:'',
        id:''
    }
    setAvatar = (avatar)=>{
        this.setState({
            avatar
        })
    }
    handleChange = (name,val)=>{
        this.setState({
            [name]:val
        })
    }
    submit = ()=>{
        var id =''
        try {
            id =JSON.parse(localStorage.getItem('user'))._id
        } catch (error) {
            id = ''
        }
        
        if(id){
            this.setState({
                id
            },()=>{
                this.props.updateuserinfo(this.state)
            })
        }else{
            Toast.info('获取用户 信息失败',1,()=>{
                this.props.history.push('/login')
            })
            
        }
        
    }
    render(){
          // 如果redirectTo有值, 就需要重定向到指定的路由
          const {redirectTo,msg,avatar} = this.props.user
          if(msg){
              Toast.info(msg,1)
          }
          if(redirectTo&&avatar) {
              return <Redirect to={redirectTo}/>
          }
        return(
            <div>
            <NavBar>大神信息完善界面</NavBar>
            <HeaderSelector  setAvatar={this.setAvatar} />
            <InputItem placeholder="请输入招聘职位"  onChange={val =>this.handleChange('post',val)}>求职岗位</InputItem>
            <TextareaItem title="个人介绍" rows={3}  onChange={val =>this.handleChange('info',val)}></TextareaItem>
            <Button type="primary" onClick={this.submit}>保存</Button>
        </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {updateuserinfo}

)(dashenInfo)