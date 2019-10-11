import React, { Component } from 'react';
import './headersearch.scss';

class HeaderSearch extends Component  {
 state = {
   showsearch: false,
   query: "",
 }

 handleKeyDown = (event) => {
  const { query } = this.state;y
  if (event.key === 'Enter'){
    this.setState({showsearch: true});

  }
}

  render() {
    const { showsearch, query } = this.state;
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <div className="search-block">
          <input 
            className="header-search" 
            placeholder="Search movies by name..." 
            onChange={event => {this.setState({query: event.target.value});}}
            onKeyDown={this.handleKeyDown} 
          />
          {showsearch ?(
            <div className="show-search">
              
            </div>
          ): null
          }
        </div>
      </div>
    );
  }
}

export default HeaderSearch;
