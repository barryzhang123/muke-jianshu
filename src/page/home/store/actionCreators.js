import * as constants from './constants'
import axios from 'axios'

export const toggleShowScrollAction = (data) => ({
    type : constants.HOME_SHOW_SCROLL_TO_TOP,
    data
});

export const getHomeArticleData = (data) => ({
    type : constants.HOME_GET_ARTICLE_DATA,
    topicList : data.topicList,
    articleList : data.articleList,
    recommendList : data.recommendList,
});

export const getHomeArticleDataAction = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then((res) => {
            if(res.data.success === true){
                dispatch(getHomeArticleData(res.data.data));
            }
        }).catch((error) => {

        })
    }
};