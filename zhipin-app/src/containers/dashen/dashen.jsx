import React,{Component} from 'react'
import {connect} from 'react-redux'

import UserList from '../../components/user-list/user-list'
import {getUserBytype} from '../../redux/actions'
class Dashen extends Component {
    componentDidMount(){
        this.props.getUserBytype('dashen')
    }
    render(){
        const {userlist} = this.props
    console.log(userlist)
    return(
            <UserList userlist = {userlist}/>
        )
    }
}

export default connect(
    state=>({userlist:state.userlist}),
    {getUserBytype}
)(Dashen)