import React,{ Component } from 'react';
import {Provider} from 'react-redux'
import Home from './page/home';
import Detail from './page/detail/loadable';
import Login from './page/login';
import Header from './common/header';
import store from  './store';
import {BrowserRouter, Route} from  'react-router-dom'

class App extends Component{
  render(){
    return (
        <Provider store ={store}>
            <BrowserRouter>
            <div>
                <Header />
                <Route path ='/' exact component={Home} />
                <Route path ='/login' exact component={Login} />
                <Route path ='/detail/:id' exact component={Detail} />
            </div>
            </BrowserRouter>
        </Provider>
    );
  }
}
export default App;
