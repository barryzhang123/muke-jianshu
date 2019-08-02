import React,{ Component} from 'react';
import {connect} from 'react-redux'

class HomeBanner extends Component{
    render(){
        return (
           <div >
               <img style={{width : '100%',marginBottom : '35px',}} className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4685/15af36f728068dfa8860f2a6259c19a5a84f0921.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);