import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './headerbutton.scss';
import Video from '../../Video/Video';

class HeaderButton extends Component {
  state = {
    showOverview: false,
    showItemVideo: false,
  };

  handleClick = () => {
    this.setState(state => ({
      showOverview: !state.showOverview,
    })); 
  };

  handleVideoClick = () => {
    this.setState(state => ({
      showItemVideo: !state.showItemVideo,
    }));
  };

  render() {
    const { overview, video } = this.props;
    const { showOverview, showItemVideo } = this.state;
    return (
      <div className="header-button-countainer">
        {showOverview ? <div className="headerbutton-overview">{overview}</div> : null}
        <div className="button-countainer-header">
          <button onClick={e => this.handleVideoClick(e)} className="button-header" type="button">watch now</button>
          <button onClick={this.HandleClick} className="button-header" type="button">view info</button>
        </div>
        <Video handleVideoClick={this.handleVideoClick} stateVideo={showItemVideo} video={video} />
      </div>
    );
  }
}

HeaderButton.propTypes = {
  overview: PropTypes.string.isRequired,
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(HeaderButton)]),
};

HeaderButton.defaultProps = {
  video: [],
};

export default HeaderButton;
