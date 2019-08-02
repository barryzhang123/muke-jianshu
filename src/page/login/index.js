import React,{ Component} from 'react'
import { connect }from 'react-redux'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
    Title,
    LoginTitle,
    RegisterTitle,
} from './style'
import { asyncLogin }from './store/actionCreators'
import { Redirect }from 'react-router-dom'

class Login extends Component {
    render(){
        const {login} = this.props;
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Title>
                            <LoginTitle>登录</LoginTitle>
                            <b>·</b>
                            <RegisterTitle>注册</RegisterTitle>
                        </Title>
                        <Input className = 'account' placeholder='账号' innerRef ={(acount) => {this.account = acount}}/>
                        <Input className = 'password' placeholder='密码' type='password' innerRef = {(password)=> {this.password = password}} />
                        <Button onClick = {() => {this.props.handlerLogin(this.account, this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return (
                <Redirect to='/'/>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        login : state.getIn(['login','login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlerLogin(account, password){
            dispatch(asyncLogin(account.value, password.value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)