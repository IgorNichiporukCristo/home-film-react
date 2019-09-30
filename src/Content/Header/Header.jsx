import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSearch from './HeaderContent/HeaderSearch';
import HeaderInformation from './HeaderContent/HeaderInformation';
import HeaderButton from './HeaderContent/HeaderButton';
import './header.scss';

class Header extends Component {
  componentDidMount(){}


  render() {
    const {
      handleVideoClick,
      movie: {
        poster,
        title,
        genres,
        vote_average,
        overview,
        video,
        time
      },
    } = this.props;
    return (
      <div className="header-style">
        <img className="poster" alt="" src={`https://image.tmdb.org/t/p/original${poster}`} />
        <div className="header-content">
          <div className="header-information">
            <HeaderSearch />
          </div>  
          <div className="header-owerview">
            <HeaderInformation 
              title={title} 
              genres={genres} 
              vote={vote_average} 
              time={time} 
            />
            <HeaderButton 
              overview={overview} 
              video={video} 
              handleVideoClick={handleVideoClick} 
            />
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
    PropTypes.instanceOf(Header),
  ]),
  handleVideoClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  movie: {},
};

export default Header;