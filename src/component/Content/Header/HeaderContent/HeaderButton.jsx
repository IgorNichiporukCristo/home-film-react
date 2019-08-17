import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './headerbutton.scss';
import Video from '../../Video/Video';

class HeaderButton extends Component {
  state = {
    showOverview: false,
  };

  handleClick = () => {
    this.setState(state => ({
      showOverview: !state.showOverview,
    })); 
  };

  handleClickVideo = () => {
    const { handleVideoClick } = this.props;
      handleVideoClick();  
  };

  render() {
    const { overview, video,  showItemVideo, handleVideoClick } = this.props;
    const { showOverview } = this.state;
    return (
      <div className="header-button-countainer">
        {showOverview ? <div className="headerbutton-overview">{overview}</div> : null}
        <div className="button-countainer-header">
          <button onClick={this.handleClickVideo} className="button-header" type="button">watch now</button>
          <button onClick={this.handleClick} className="button-header" type="button">view info</button>
        </div>
        <Video handleVideoClick={handleVideoClick} stateVideo={showItemVideo} video={video} />
      </div>
    );
  }
}

HeaderButton.propTypes = {
  overview: PropTypes.string.isRequired,
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(HeaderButton)]),
  showItemVideo: PropTypes.bool.isRequired,
  handleVideoClick: PropTypes.func.isRequired,
};

HeaderButton.defaultProps = {
  video: [],
};

export default HeaderButton;
