import React, {Component} from 'react';
import {
    Logo, HeaderWrapper, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,
    SearchTitle, SearchList, SearchSwitch,SearchListItem
} from './style';
import {actionCreators} from  './store'
import {CSSTransition} from 'react-transition-group'
import  {connect} from 'react-redux';
import '../../statics/iconfont/iconfont'

class Header extends Component {
    getSearchArea(){
        const {focused} = this.props;
        if(focused){
            return (
                <SearchInfo>
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch>
                            <i  className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchSwitch>
                    </SearchTitle>
                    <SearchList>
                        <SearchListItem key={1}><a href='./' className = 'item-content'>区块链</a></SearchListItem>
                        <SearchListItem key={2}><a href='./' className = 'item-content'>小程序</a></SearchListItem>
                        <SearchListItem key={3}><a href='./' className = 'item-content'>vue</a></SearchListItem>
                        <SearchListItem key={4}><a href='./' className = 'item-content'>毕业</a></SearchListItem>
                        <SearchListItem key={5}><a href='./' className = 'item-content'>PHP</a></SearchListItem>
                        <SearchListItem key={6}><a href='./' className = 'item-content'>故事</a></SearchListItem>
                        <SearchListItem key={7}><a href='./' className = 'item-content'>flutter</a></SearchListItem>
                        <SearchListItem key={8}><a href='./' className = 'item-content'>理财</a></SearchListItem>
                        <SearchListItem key={9}><a href='./' className = 'item-content'>美食</a></SearchListItem>
                    </SearchList>
                </SearchInfo>
            )
        }else{
            return null;
        }

    }
    render() {
        const {focused, handlerFocus, handlerBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo ></Logo>
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载APP</NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            /*过度的超时时间，注意要设置的比css中定义的时间长*/
                            timeout={100000}
                            classNames="my-node"
                        >
                            <NavSearch
                                className = {focused ? 'focused' : ''}
                                onFocus = {handlerFocus}
                                onBlur = {handlerBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont search-icon' : 'iconfont search-icon'} >&#58900;</i>
                        {this.getSearchArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'writing'>
                        <i className = 'iconfont'>&#xe615;</i>
                        写文章
                    </Button>
                    <Button className =  'register'>注册</Button>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavItem className = 'right'>
                        <i className = 'iconfont spin'>&#xe636;</i>
                    </NavItem>
                </Addition>
            </HeaderWrapper>
        )
    }
}
//映射store中的state到props
const mapStateToProps = (state) =>{
    return {
        focused : state.get('header').get('focused'),
    }
}
//映射dispatch到props
const mapDispatchToProps = (dispatch) => {
    return {
        handlerFocus(){
            dispatch(actionCreators.searchOnFocus());
        },
        handlerBlur(){
            dispatch(actionCreators.searchOnBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);