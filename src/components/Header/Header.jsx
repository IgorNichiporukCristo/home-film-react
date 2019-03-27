import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';
import Search from './Content/Search';
import DescriptionFilm from './Content/DescriptionFilm';
import '../../Api/Api';

function Header(){
    return (
    <div>
      <div className="header">
        <Search />
        <DescriptionFilm />
      </div>
    </div>
  );
}

export default hot(module)(Header);
