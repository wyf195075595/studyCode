import React,{Component} from 'react'
import {connect} from 'react-redux'
import UserList from '../../components/user-list/user-list'
import {getUserBytype} from '../../redux/actions'

class Laoban extends Component {
    componentDidMount(){
        this.props.getUserBytype('laoban')
    }
    render(){
        const {userlist} = this.props
        return(
            <UserList userlist = {userlist}/>
        )
    }
}

export default connect(
    state=>({userlist:state.userlist}),
    {getUserBytype}
)(Laoban)

