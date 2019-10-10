import React, { Component } from 'react';
import './headersearch.scss';

class HeaderSearch extends Component  {
 componentDidMount() {}
  render() {
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <input 
          className="header-search" 
          placeholder="Search movies by name..." 
        />
      </div>
    );
  }
}

export default HeaderSearch;
