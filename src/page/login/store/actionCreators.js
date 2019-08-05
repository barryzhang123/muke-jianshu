import * as constants from './constants'
import axios from 'axios'

export const loginAction = (data) => ({
    type : constants.LOGIN_USER_LOGIN,
    account : data
})

export const asyncLogin = (account, password) => {
    return (dispatch) => {
        axios.get('./api/login.json', {
                    account : account,
                    password : password
            }).then(() =>{
                dispatch(loginAction(account));
            })
    }
}