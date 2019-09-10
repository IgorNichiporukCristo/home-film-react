import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Main from './component/Content/Main';
import store from './store';
import './app.scss';

const App = () => {
  return (
    <div className="appborder">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
};

export default hot(module)(App);
