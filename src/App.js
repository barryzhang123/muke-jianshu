import React,{ Component } from 'react';
import {Provider} from 'react-redux'
import Home from './page/home';
import loadable from './page/detail/loadable';
import Login from './page/login';
import Header from './common/header';
import store from  './store';
import {HashRouter, Route} from  'react-router-dom'

const DeatilLoadable = loadable(() => import('./page/detail/'));
const LoginLoadable = loadable(() => import('./page/login/'));

class App extends Component{
  render(){
    return (
        <Provider store ={store}>
            <HashRouter>
            <div>
                <Header />
                <Route path ='/' exact component={Home} />
                <Route path ='/login' exact component={LoginLoadable} />
                <Route path ='/detail/:id' exact component={DeatilLoadable} />
            </div>
            </HashRouter>
        </Provider>
    );
  }
}
export default App;
