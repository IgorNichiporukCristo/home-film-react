import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './headersearch.scss';

class HeaderSearch extends Component  {
  state = {
    query: "",
  }
  
  handleKeyDown = (event) => {
    const { query } = this.state;
    if (event.key === 'Enter'){
      console.log(query);
      history.pushState({}, '', '/search');
    }
  }

  render() {
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <input 
          className="header-search" 
          placeholder="Search movies by name..." 
          onChange={event => {this.setState({query: event.target.value});}}
          onKeyDown={this.handleKeyDown} 
        />
      </div>
    );
  }
}

export default HeaderSearch;
