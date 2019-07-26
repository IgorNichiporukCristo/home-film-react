import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './video.scss';

class Video extends Component {
  componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
    document.addEventListener('keydown' ,this.handlePress, false); 
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  handleClick = () => {
    const { handleVideoClick } = this.props;
      handleVideoClick();  
  };

  handlePress = (e) => {
    const { handleVideoClick } = this.props;
    const { stateVideo } = this.props;
    if (e.keyCode == 27 && stateVideo ) {
      handleVideoClick();
    }
  };

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
            <div
              className="buttonVideo"
              onClick={e => this.handleClick(e)}
              onKeyPress={e => this.handlePress(e)}
              role="button"
              tabIndex="0"
            >
              <YouTube onKeyPress={e => this.handlePress(e)} videoId={video[0].key} opts={opts} />
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
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(Video)]),
  stateVideo: PropTypes.bool.isRequired,
};
Video.defaultProps = {
  video: [],
};
export default Video;
