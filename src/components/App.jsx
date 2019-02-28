import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.scss';


function App() {
  return (
    <div className="content">
      <Header />
      <Main />
    </div>
  );
}

export default hot(module)(App);