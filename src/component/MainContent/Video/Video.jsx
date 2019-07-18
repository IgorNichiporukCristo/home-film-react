import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './video.scss';

class Video extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  
  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
    
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    document.removeEventListener('click', this.handleClickOutside, false);
  }
  
  handleClickOutside() {
    const VideoBlock = this.videoRef;
    if ((!VideoBlock)) {
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
              <div ref={this.videoRef}>
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
