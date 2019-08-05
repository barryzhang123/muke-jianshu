import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
/**
 * 搜索框聚焦
 */
export const searchOnFocus = () => ({
    type : constants.SEARCH_ON_FOCUS
})
/**
 * 搜索框失去焦点
 */
export const searchOnBlur = () => ({
    type : constants.SEARCH_ON_BLUR
})
/**
 * 推荐搜索框鼠标进入
 */
export const searchMouseIn= () => ({
    type : constants.SEARCH_MOUSE_IN
})
/**
 * 推荐搜索框鼠标移出
 */
export const searchMouseOut = () => ({
    type : constants.SEARCH_MOUSE_OUT
})
/**
 * 获取搜索结果列表
 */
export const getSearchList = (data) => ({
    type : constants.SEARCH_GET_LIST,
    data : fromJS(data),
    totalPage : Math.ceil(data.length/10)
})

/**
 * 换一换更改页码
 */
export const changeSearchList = (currentPage) => ({
    type : constants.SEARCH_CHANGE_LIST,
    currentPage : currentPage
})

/**
 * 获取推荐搜索列表
 */
export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then((res) => {
            let data = getSearchList(res.data.data);
            dispatch(data);
        }).catch((data) => {

        })
    }
}
