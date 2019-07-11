import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSearch from './HeaderContent/HeaderSearch';
import HeaderInformation from './HeaderContent/HeaderInformation';
import './header.scss';

class Header extends Component {
  componentDidMount() {}

  render() {
    const {
      movie: { 
        poster, 
        title, 
        genres, 
        vote_average, 
        // time 
      },
    } = this.props;
    return (
      <div className="header-style">
        <img className="poster" alt="" src={`https://image.tmdb.org/t/p/original${poster}`} />
        <div className="header-information">
          <HeaderSearch />
          <div className="header-content">
            <HeaderInformation title={title} genres={genres} vote={vote_average} />
            <div className="header-button-countainer">
              <button className="button-header" type="button">view info</button>
              <button className="button-header" type="button">watch now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number, 
    PropTypes.instanceOf(Header)
  ]),
};

Header.defaultProps = {
  movie: {},
};

export default Header;
