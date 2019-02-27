import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';

function Header() {
  return (
    <div className='header'> 
      <div><TopHeader /></div> 
      <div><InfoHeader /></div>
    </div>
  );
}

function TopHeader() {
  return (
    <div className='top_header'>
      <div className='film_search_header'>
        <h1>FILMS</h1>
      </div>
      <div className='search_header'>vcbc</div>
    </div>
  );
}

function InfoHeader() {
  return (
    <div className='info_header'>gjhjhgjh</div>
  );
}
export default hot(module)(Header);
