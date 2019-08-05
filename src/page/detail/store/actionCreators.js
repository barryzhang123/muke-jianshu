import * as constants from './constants'
import axios from 'axios'

export const getDetailData = (title, content) => ({
    type : constants.DETAIL_GET_ARTICLE_DETAIL,
    title,
    content
})

export const getDetailAction = () => {
    return (dispatch) => {
        axios.get('./api/detail.json').then((res) => {
            const result = res.data.data;
            if(res.data.success === true){
                dispatch(getDetailData(result.title, result.content));
            }
        }).catch(() => {

        })
    }
}

