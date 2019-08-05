import React,{ Component} from 'react'
import { connect }from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
}from './style'
import HomeRightBoard from './components/HomeRightBoard'
import HomeRightRecommend from './components/HomeRightRecommend'
import HomeArticle from './components/HomeArticle'
import HomeBanner from './components/HomeBanner'
import {getHomeArticleDataAction, toggleShowScrollAction} from './store/actionCreators'

class Home extends Component {
    componentDidMount(){
        this.props.getHomeArticleDataAction();
        this.bindScrollEvent();
    }
    bindScrollEvent(){
        window.addEventListener('scroll', this.props.showScrollToTop)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.showScrollToTop)
    }
    goToScrollTop(){
        window.scroll(0, 0);
    }

    render(){
        return (
            <HomeWrapper className='clearfix'>
                <HomeLeft>
                    <HomeBanner>
                    </HomeBanner>
                    <HomeArticle>
                    </HomeArticle>
                </HomeLeft>
                <HomeRight>
                    <HomeRightBoard>
                    </HomeRightBoard>
                    <HomeRightRecommend>
                    </HomeRightRecommend>
                </HomeRight>
                {
                    this.props.isShowScrollToTop ?
                        <BackTop onClick={this.goToScrollTop}><i className='iconfont back-top' >&#xe631;</i></BackTop>
                        :
                        null
                }
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList : state.getIn(['home', 'articleList']),
        isShowScrollToTop : state.getIn(['home', 'isShowScrollToTop'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeArticleDataAction(){
            dispatch(getHomeArticleDataAction());
        },
        showScrollToTop(){
            if(document.documentElement.scrollTop > 100){
                dispatch(toggleShowScrollAction(true));
            }else{
                dispatch(toggleShowScrollAction(false));
            }
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)