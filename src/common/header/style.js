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
    margin: 0 auto;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height : 56px;
    padding : 0 15px;
    font-size : 17px;
    color : #333;
    .item-Aa{
        font-size : 24px;
    }
    &.left{
        float : left;
    }
    &.right{
        font-size : 15px;
        float : right;
        color : #969696;
        .beta{
            height : 25px;
            vertical-align : middle; 
        }
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
    margin-top: 9px;
	margin-left: 20px;
    box-sizing : border-box;
	padding: 0 30px 0 20px;
    border-radius : 19px;
    background : #eee;
    &::placeholder{
        color : #999;
    }
    &.focused{
        width : 240px;
    }
    &.my-node-enter{ 
        width : 160px;
        /*该部分的transition，最好放在enter和exit中，不要放在active中 */
        transition: all .3s ease-in-out;   
    }
    &.my-node-enter-active{
        width : 240px;             
    }
    &.my-node-exit{
        width : 240px;
        transition: all .3s ease-in-out;
    }
    &.my-node-exit-active {
        width : 160px;
    }
`

export const SearchWrapper = styled.div`
    position :relative;
    float : left;
    .search-icon{
       position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused{
		    background: #777;
			color: #fff;
		}
    }
`

export const Addition = styled.div`
    height : 58px;
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
    border : 1px solid rgba(236,97,73,.7);
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
        width : 100px;
        color : #fff;
        background: #ea6f5a;
    }
    .write-icon{
        margin-right : 4px;
    }
`
export const SearchInfo = styled.div`
    position : absolute;
    width : 250px;
    left : 20px;
    box-sizing : border-box;
    top : 58px;
    background : #fff;
    border-radius : 3px;
    padding: 20px;
    box-shadow : 0 0 8px rgba(0, 0, 0, .2);
    :before{
        content : "";
        position : absolute;
        left : 20px;
        bottom : 99%;
        width : 0;
        height : 0;
        border : 14px solid transparent;
        border-bottom-color: #fff;
        box-sizing : border-box;
    }
`

export const SearchTitle = styled.div`
    color : rgb(150, 150, 150);
    font-size: 14px;
    margin-bottom : 10px;
`
export const SearchSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor : pointer;
	.spin{
	    display : block;
	    margin-right : 3px;
	    float : left;
	    font-weight : 500;
	    font-size : 14px;
        transition : all .2s ease-in;
        transform-origin: center center;
	}
`
export const SearchList = styled.ul`
    list-style : none;
    color : rgb(120, 120, 120);
    overflow : hidden;
`
export const SearchListItem = styled.li`
    margin-right : 10px;
    float : left;
    display: inline-block;
    .item-content{	  
        font-size : 12px;
    	 display : block;
        margin : 7px 0px;
        padding: 2px 6px;
        color : #787878;
        box-sizing : border-box;
        border : 1px solid #ddd;
        border-radius : 3px;
        cursor : pointer;
        text-decoration : none;
        :hover{
            border-color : #666;
        }
    }
`

