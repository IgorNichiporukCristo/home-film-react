import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.scss';

class Header extends Component {
  componentDidMount(){}

  render() {
    const { 
      movie : {
        poster
      }, 
    } = this.props;
    return (
      <div className="header-style">
        <img className="poster" alt="" src={`https://image.tmdb.org/t/p/original${poster}`} />
        <div className="header-information">
          <h1 className="name-page">Igor_ZBS_PACAN</h1>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  movie: [],
};

export default Header;
