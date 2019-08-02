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
import {getHomeArticleDataAction} from './store/actionCreators'


class Home extends Component {
    componentDidMount(){
        this.props.getHomeArticleDataAction();
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
                <BackTop>
                    <i className='iconfont back-top' >&#xe631;</i>
                </BackTop>
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList : state.getIn(['home', 'articleList']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeArticleDataAction(){
            dispatch(getHomeArticleDataAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)