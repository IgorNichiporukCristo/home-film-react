import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './header/Header';
import Main from './main/Main';
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
