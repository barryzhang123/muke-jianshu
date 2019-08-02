import React,{ Component} from 'react';
import {connect} from 'react-redux'
import {HomeArticleItem, HomeArticleItemInfo} from '../style'
class HomeArticle extends Component{
    render(){
        let {articleList} = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => {
                        return (
                            <HomeArticleItem key={item.get('id')}>
                                <HomeArticleItemInfo >
                                    <h3 className='title'>
                                        {item.get('title')}
                                    </h3>
                                    <p className='desc'>
                                        {item.get('desc')}
                                    </p>
                                </HomeArticleItemInfo>
                                <img
                                    className = 'pic'
                                    src ={item.get('imgUrl')}
                                    alt = '图片'
                                />
                            </HomeArticleItem>
                        )
                    })
                }
            </div>
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeArticle);