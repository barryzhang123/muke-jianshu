import React,{ Component} from 'react'
import {connect} from 'react-redux'
import {
    RightRecommendWrapper,
    RightRecommendTitle,
    RightRecommendList,
    RightRecommendSwitch,
    RightRecommendItem
}from '../style'

class HomeRightRecommend extends Component{
    switch(icon){
        let originalTransform = icon.style.transform.replace(/[^0-9]/g,'');
        if(originalTransform){
            originalTransform = parseInt(originalTransform);
        }else{
            originalTransform = 0;
        }
        icon.style.transform = 'rotate(' + (originalTransform + 360) + 'deg)'
    }
    render(){
        return (
            <RightRecommendWrapper>
                <RightRecommendTitle>
                    推荐作者
                    <RightRecommendSwitch onClick={() => this.switch(this.spinIcon)}>
                        <i  ref={(current) => {this.spinIcon = current}}className="iconfont spin">&#58889;</i>
                        换一批
                    </RightRecommendSwitch>
                </RightRecommendTitle>
                <RightRecommendList>
                    {
                        this.props.recommendList.map((item, index) => {
                            return (
                                <RightRecommendItem key={item.get('id')}>
                                    <a className = 'avatar' href="./">
                                        <img src={item.get('avatar_source')} alt='头像'/>
                                    </a>

                                    <a className = 'follow' href="./">
                                        <i  className="iconfont follow-icon">&#58899;</i>
                                        关注
                                    </a>
                                    <a className = 'recommend-title' href="./">
                                        {item.get('nickname')}
                                    </a>
                                    <p  className = 'recommend-desc'>
                                        写了{(item.get('total_wordage')/1000).toFixed(1) + 'k'}字 · {(item.get('total_likes_count')/1000).toFixed(1) + 'k'}喜欢
                                    </p>
                                </RightRecommendItem>
                            )
                        })
                    }
                </RightRecommendList>
            </RightRecommendWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    recommendList : state.getIn(['home', 'recommendList']),
})

const mapDispatchToProps = (dispatch) => ({

})
export default  connect(mapStateToProps, mapDispatchToProps())( HomeRightRecommend);