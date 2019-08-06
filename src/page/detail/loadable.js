import React, {Component} from 'react'
import Loadable from 'react-loadable'

const loadComponent = () => {
    return <div>loading</div>
}
export default (loader, loading =loadComponent ) =>{
    return Loadable({
        delay : 200,
        loader : loader,
        loading : loading
    })
}

 /*Loadable({
    delay : 5000,
    loader : () => import('./'),
    loading : loadComponent,
});*/
