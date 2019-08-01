import React,{ Component} from 'react'
import { connect }from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
}from './style'
import HomeRightBoard from './components/HomeRightBoard'
import HomeRightRecommend from './components/HomeRightRecommend'
import HomeArticle from './components/HomeArticle'
import HomeBanner from './components/HomeBanner'


class Home extends Component {
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
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapStateToProps)(Home)