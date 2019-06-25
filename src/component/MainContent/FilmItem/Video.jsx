import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './video.scss';

class Video extends Component {

  handleClick = () => {
    const { handleVideoClick } = this.props;
    handleVideoClick();
  };

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { stateVideo, video } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        {
          stateVideo ? ReactDOM.createPortal(
            <div className="buttonVideo">
              <button type="button" onClick={this.handleClick}>back</button>
              <YouTube videoId={video[0].key} opts={opts} onReady={this._onReady} />
            </div>,
            document.getElementById('app')) : null}
      </div>
    );
  }
}

Video.propTypes = {
  handleVideoClick: PropTypes.func.isRequired,
  stateVideo: PropTypes.bool.isRequired,
  video: PropTypes.string.isRequired,
};

export default Video;
