import React, {Component} from 'react'
import {Logo, HeaderWrapper, Nav, NavItem, NavSearch, Addition, Button} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo ></Logo>
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载</NavItem>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavItem className = 'right'>注册</NavItem>
                    <NavSearch ></NavSearch>
                    {/*条件*/}
                    <Addition>
                        <Button className = 'writing'>写文章</Button>
                        <Button className =  'register'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}
export default Header