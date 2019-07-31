import {constants} from './'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused : false
})

export default (state = defaultState, action) => {
   const type = action.type;
   switch(type){
       case constants.SEARCH_ON_FOCUS:
           //此处不能修改state对象，改用immutable,会结合当前set的值生成一个新的对象
           return state.set('focused', true);
       case constants.SEARCH_ON_BLUR:
           return state.set('focused', false);
       default:

           return state;
   }
}