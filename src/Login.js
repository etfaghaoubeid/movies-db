import React, { Component } from 'react'
import {connect} from 'react-redux';
import login from './redux/actions/login'

class Login extends Component {
    
    render() {
        return (
            <div>
               <h1>user status: {this.props.status.isLogin}</h1> 
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
      status:state.login
    }
    
}


export default connect(mapStateToProps, login)( Login)
