import {fromJS} from 'immutable';
import  * as constants from './constants'

const defaultState = fromJS({
    topicList : [],
    articleList : [],
    recommendList : [],
    isShowScrollToTop : false,
})
/**
 * reducer为什么是纯函数
 * 简单点来说就是:接受旧的 state 和 action,返回新的 state
 * 为什么呢？因为在redux的源码中监听state是否发生变化，是把新返回的state和旧的值通过==进行浅比较（只是内存地址的比较）
 * 所以如果不返回一个新的值，redux就会认为redux没有发生变化
 * 为什么要进行浅比较？什么深比较的内存消耗比较大
 */
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
        case constants.HOME_SHOW_SCROLL_TO_TOP:
            return state.set('isShowScrollToTop', action.data);
        default:
            return state;
    }
}