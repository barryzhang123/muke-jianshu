import {fromJS} from 'immutable';
import  * as constants from './constants'

const defaultState = fromJS({
    login : false,
    account : ''
})

export default (state = defaultState, action) => {
    let type = action.type;
    switch(type){
        case constants.LOGIN_USER_LOGIN:
            return state.merge({
                account :  action.account,
                login :  true
            });
        default:
            return state;
    }
}