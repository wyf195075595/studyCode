// 老板内容详情
import React,{Component} from 'react'
import {connect}  from 'react-redux'
import {Redirect} from 'react-router-dom'
import {updateuserinfo} from '../../redux/actions'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    Toast
} from 'antd-mobile'

class laobanInfo extends Component{
    state = {
        avatar:'',
        post:'',
        info:'',
        company:'',
        salary:'',
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
                console.log(id,this.state)
                this.props.updateuserinfo(this.state)
            })
        }else{
            Toast.info('获取用户 信息失败',1,()=>{
                console.log(this.props)
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
                <NavBar>老板信息完善界面</NavBar>
                <HeaderSelector setAvatar={this.setAvatar} />
                <InputItem placeholder="请输入招聘职位" onChange={val =>this.handleChange('post',val)}>招聘职位</InputItem>
                <InputItem placeholder="请输入公司名称" onChange={val =>this.handleChange('company',val)}>公司名称</InputItem>
                <InputItem placeholder="请输入职位薪资(如10K)" onChange={val =>this.handleChange('salary',val)}>职位薪资</InputItem>
                <TextareaItem title="职位要求" rows={3} onChange={val =>this.handleChange('info',val)}></TextareaItem>
                <Button type="primary" onClick={this.submit}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state=>({user:state.user}),
    {updateuserinfo}
)(laobanInfo)