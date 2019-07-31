import React,{ Component } from 'react';
import {Provider} from 'react-redux'
import Header from './common/header';
import store from  './store'

class App extends Component{
  render(){
    return (
        <Provider store ={store}>
            <div>
                <Header />
            </div>
        </Provider>
    );
  }
}
export default App;
