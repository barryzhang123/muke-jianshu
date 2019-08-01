import {constants} from './'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused : false,
    mouseIn : false,
    listItem : [],
    currentPage : 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
   const type = action.type;
   switch(type){
       case constants.SEARCH_ON_FOCUS:
           //此处不能修改state对象，改用immutable,会结合当前set的值生成一个新的对象
           return state.set('focused', true);
       case constants.SEARCH_ON_BLUR:
           return state.set('focused', false);
       case constants.SEARCH_MOUSE_IN:
           return state.set('mouseIn', true);
       case constants.SEARCH_MOUSE_OUT:
           return state.set('mouseIn', false);
       case constants.SEARCH_GET_LIST:
           return state.merge({
               listItem : action.data,
               totalPage : action.totalPage,
           });
       case constants.SEARCH_CHANGE_LIST:
           return state.set('currentPage', action.currentPage);
       default:
           return state;
   }
}