import React, {Component} from 'react';
import {
    Logo, HeaderWrapper, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,
    SearchTitle, SearchList, SearchSwitch,SearchListItem
} from './style';
import {actionCreators} from  './store'
import {CSSTransition} from 'react-transition-group'
import  {connect} from 'react-redux';
import '../../statics/iconfont/iconfont'
import {Link} from 'react-router-dom'
import imageSrc from '../../statics/image/nav_jsds_beta.png'

class Header extends Component {
    getSearchArea(){
        const {focused, mouseIn,  currentPage, totalPage, listItem, handlerMouseEnter, handlerMouseLeave, handlerChangePage} = this.props;
        let newJsList = listItem.toJS();
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter = {handlerMouseEnter}
                    onMouseLeave = {handlerMouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch
                            onClick={() => handlerChangePage(currentPage, totalPage,this.spinIcon)}
                        >
                            <i  ref={(current) => {this.spinIcon = current}}className="iconfont spin">&#58889;</i>
                            换一批
                        </SearchSwitch>
                    </SearchTitle>
                    <SearchList>
                        {
                            newJsList.map((item, index) => {
                                return  <SearchListItem key={index}><a href='./' className = 'item-content'>{item}</a></SearchListItem>
                            }).slice((currentPage -1)*10 , currentPage * 10)
                        }
                    </SearchList>
                </SearchInfo>
            )
        }else{
            return null;
        }

    }
    render() {
        const {focused, listItem,login, account, handlerFocus, handlerBlur} = this.props;
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
                                onFocus = {()=> handlerFocus(listItem)}
                                onBlur = {handlerBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont search-icon' : 'iconfont search-icon'} >&#58936;</i>
                        {this.getSearchArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'writing'>
                        <i className = 'iconfont write-icon'>&#58894;</i>
                        写文章
                    </Button>
                    {
                        login === true ? <NavItem className='right'>{account}</NavItem> :
                            <Link to={'/login'}><Button className =  'register'>注册</Button></Link>
                    }
                    {
                        login === true? null :
                        <Link to={'/login'}><NavItem className = 'right'>登录</NavItem></Link>
                    }
                    <NavItem className = 'right'>
                        <img className = 'beta' src={imageSrc} alt = '图片'/>
                    </NavItem>
                    <NavItem className = 'right'>
                        <i className = 'iconfont item-Aa'>&#xe636;</i>
                    </NavItem>
                </Addition>
            </HeaderWrapper>
        )
    }
}
//映射store中的state到props
const mapStateToProps = (state) =>{
    return {
        focused : state.getIn(['header', 'focused']),
        mouseIn : state.getIn(['header', 'mouseIn']),
        listItem : state.getIn(['header', 'listItem']),
        currentPage : state.getIn(['header', 'currentPage']),
        totalPage : state.getIn(['header', 'totalPage']),
        account : state.getIn(['login','account']),
        login : state.getIn(['login','login']),
    }
}
//映射dispatch到props
const mapDispatchToProps = (dispatch) => {
    return {
        handlerFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchOnFocus());
        },
        handlerBlur(){
            dispatch(actionCreators.searchOnBlur());
        },
        handlerMouseEnter(){
            dispatch(actionCreators.searchMouseIn());
        },
        handlerMouseLeave(){
            dispatch(actionCreators.searchMouseOut());
        },
        handlerChangePage(currentPage, totalPage, spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, '')
            if(originAngle){
                originAngle = parseInt(originAngle, 10) ;
            }else{
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(currentPage === totalPage){
                dispatch(actionCreators.changeSearchList(1));
            }else{
                dispatch(actionCreators.changeSearchList(currentPage + 1));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);