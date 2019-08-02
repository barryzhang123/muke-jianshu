import React,{ Component} from 'react'
import { connect }from 'react-redux'

class Detail extends Component {
    render(){
        return (
            <div>
                详情界面
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)