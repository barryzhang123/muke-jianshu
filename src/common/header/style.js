import styled from 'styled-components'
import logo from '../../statics/logo-jianshu.png'

export const HeaderWrapper = styled.div`
    height : 56px;
    position : relative;
    background-color : inherit;
    border-bottom : 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({href : '/'})`
    height : 56px;
    width : 100px;
    display : block;
    float : left;
    background : url(${logo});
    background-size : cover;
`

export const Nav = styled.nav`
    width: 960px;
    height : 56px;
    margin: 0 auto;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height : 56px;
    padding : 0 15px;
    font-size : 17px;
    color : #333;
    &.left{
        float : left;
    }
    &.right{
        float : right;
        color : #969696;

    }
    &.active{
        color : #ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder : '搜索'
}) `
    border : none;
    outline : none;
    width : 160px;
    height : 38px;
    margin : 9px 20px;
    box-sizing : border-box;
    padding : 0px 20px;
    border-radius : 19px;
    background : #eee;
    &::placeholder{
        color : #999;
    }
`

export const Addition = styled.div`
    height : 56px;
    position : absolute;
    right : 0;
    top : 0
`
export const Button = styled.div`
    float : right;
    border-radius : 19px;
    height : 39px;
    width : 80px;
    margin : 9px 12px 0;
    border : 1px solid rgba(236,97,73,.7);;
    padding : 6px 12px;
    box-sizing: border-box;
    font-size : 15px;
    text-align : center;
    vertical-align: middle;
    line-height: 24px;
    width: 80px;
    font-weight : 400;
    &.register{
        color: #ea6f5a;
    }
    &.writing{
        color : #fff;
        background: #ea6f5a;
    }
`
