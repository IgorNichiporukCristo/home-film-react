import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './video.scss';

class Video extends Component {
  
  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.addEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside(e) {
    const VideoBlock = document.getElementsByClassName('VideoBlock')[0];
    if (!e.path.includes(VideoBlock)) {
      const { handleVideoClick } = this.props;
      handleVideoClick();
    }
  }

  render() {
    const { stateVideo, video } = this.props;
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div> 
        {stateVideo
          ? ReactDOM.createPortal(
            <div className="buttonVideo">
              <div className="VideoBlock">
                <YouTube videoId={video[0].key} opts={opts} />
              </div>
              
            </div>,
            this.root,
            )
          : null}
      </div>
    );
  }
}

Video.propTypes = {
  handleVideoClick: PropTypes.func.isRequired,
  video: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array, 
    PropTypes.instanceOf(Video)
  ]),
  stateVideo: PropTypes.bool.isRequired,
};
Video.defaultProps = {
  video: [],
};

export default Video;
