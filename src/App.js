import React,{ Component } from 'react';
import {Provider} from 'react-redux'
import Home from './page/home';
import Header from './common/header';
import store from  './store'

class App extends Component{
  render(){
    return (
        <Provider store ={store}>
            <div>
                <Header />
                <Home/>
            </div>
        </Provider>
    );
  }
}
export default App;
