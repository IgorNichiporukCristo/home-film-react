import React, { Component } from 'react';
import './headersearch.scss';

class HeaderSearch extends Component  {
 state = {
   showsearch: false,
 }

  handleClick = () => {
    this.setState({showsearch: true});
  }

  render() {
    const { showsearch } = this.state;
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <div className="search-block">
          <input 
            className="header-search" 
            placeholder="Search movies by name..." 
            onClick={this.handleClick}
          />
          {showsearch ?(
            <div className="show-search">
              <span>fsedwfe</span>
            </div>
          ): null
          }
        </div>
      </div>
    );
  }
}

export default HeaderSearch;
