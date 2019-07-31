import * as constants from './constants'

/**
 * s搜索框聚焦
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
