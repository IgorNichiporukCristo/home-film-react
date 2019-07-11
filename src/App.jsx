import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Main from './component/MainContent/Main';
import store from './component/store';
import './app.scss';
//import Header from './component/MainContent/Header';

const App = () => { return(
  <div className="appborder">
    <Provider store={store}>
      <Main />
    </Provider>
  </div>);
};

export default hot(module)(App);
