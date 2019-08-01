import {fromJS} from 'immutable';

const defultState = fromJS({
    boardImageList : [],
})

export default (state = defultState, action) => {
    return state
}