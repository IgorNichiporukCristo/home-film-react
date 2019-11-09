import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSearch from './HeaderSearch';
import HeaderInformation from './HeaderInformatiom';
import HeaderButton from './HeaderButton';
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
      <div className="header-style" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster})` }}>
        <div className="header-content">
          <div className="header-information">
            <HeaderSearch 
              handleFilterState={this.handleFilterState} 
              handleVideoClick={handleVideoClick}  
            />
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
