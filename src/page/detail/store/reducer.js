import {fromJS} from 'immutable';
import  * as constants from './constants'

const defaultState = fromJS({
    topicList : [],
    articleList : [],
    recommendList : [],
})

export default (state = defaultState, action) => {
    let type = action.type;
    switch(type){
        case constants.HOME_GET_ARTICLE_DATA:
            //此处的merge方法返回的是合并之后的值，本身并不会改变
            const newState = state.merge({
                topicList : fromJS(action.topicList),
                articleList : fromJS(action.articleList),
                recommendList : fromJS(action.recommendList),
            })
            return newState;
        default:
            return state;
    }
}