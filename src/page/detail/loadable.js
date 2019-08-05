import React, {Component} from 'react'
import Loadable from 'react-loadable'

export default Loadable({
    delay : 20000,
    loader : () => import('./'),
    loading (){
        return <div>loading</div>
    }
});
