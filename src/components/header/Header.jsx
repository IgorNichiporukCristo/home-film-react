import React from 'react';
import { hot } from 'react-hot-loader';
import './Header.scss';
import Search from './Content/Search';
import DescriptionFilm from './Content/DescriptionFilm';

function Header() {
  return (
    <div className='header'> 
      <Search /> 
      <DescriptionFilm />
    </div>
  );
}

export default hot(module)(Header);