import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Main from './component/Main';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default hot(module)(App);
