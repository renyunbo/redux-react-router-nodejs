import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {login} from './Auth.redux';
//两个reducers 每个reducers都有一个state
//合并reducers
@connect(
    state=>state.auth,
    {login}
)

class Auth extends React.Component{
    render(){
        console.log('11111',this.props);
        return(
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
                <h2>你没有权限，需要登录才能查看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )

    }
}
export default Auth;