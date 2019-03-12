import React from 'react';
import { hot } from 'react-hot-loader';
import './header.scss';
import Search from './Content/Search';
import DescriptionFilm from './Content/DescriptionFilm';
import '../../Api/Api';

class Header extends Component {
  componentDidMount(){
    this.Api;
  }

  render() { 
    return (
    <div className="header">
      <Search />
      <DescriptionFilm />
    </div>
  );}
 
}

export default hot(module)(Header);
