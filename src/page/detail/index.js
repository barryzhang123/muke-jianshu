import React,{ Component} from 'react'
import { connect }from 'react-redux'
import { withRouter }from 'react-router-dom'

import {
    DetailWrapper,
    Header,
    Content
} from './style'
import {getDetailAction} from './store/actionCreators'

class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content
                    dangerouslySetInnerHTML={{__html: this.props.content}}
                >
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        title : state.getIn(['detail', 'title']),
        content : state.getIn(['detail', 'content'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(articleId){
            dispatch(getDetailAction(articleId));
        }
    }
}
/*
默认情况下必须经过路由匹配渲染的组件才存在this.props,才拥有路由参数，
执行this.props.history.push('/detail')跳转到对应路由的页面，
然而不是所有组件都直接与路由相连（通过路由跳转到此组件）的，
当这些组件需要路由参数时，使用withRouter就可以给此组件传入路由参数，
将react-router的history、location、match三个对象传入props对象上，此时就可以使用this.props。
 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))