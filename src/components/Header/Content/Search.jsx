import React from 'react';
import { hot } from 'react-hot-loader';
import './HeaderContent.scss';

function Search() {
    return (
      <div className='SEARCH'>
        <h1>FILMS</h1> 
        <input className="shadow" type="search" placeholder="Search" />
      </div>
    );
  }



  export default hot(module)(Search);