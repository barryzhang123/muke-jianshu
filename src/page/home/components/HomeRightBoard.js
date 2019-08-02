import React,{ Component} from 'react';
import {connect} from 'react-redux'
import {
    RightBorderWrapper
}from '../style';

class HomeRightBoard extends Component{
    render(){
        return (
            <RightBorderWrapper>
                <a href='/'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club"/>
                </a>
                <a href='/'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7"/>                </a>
                <a href='/'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s club"/>
                </a>
                <a href='/'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s club"/>
                </a>
            </RightBorderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        boardImageList : state.getIn(["home","boardImageList"]),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRightBoard);