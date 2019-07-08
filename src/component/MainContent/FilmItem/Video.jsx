import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import './video.scss';

class Video extends Component {

  componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
}

componentWillUnmount() {
    document.body.removeChild(this.root);
}

  handleClick = () => {
    const { handleVideoClick } = this.props;
    handleVideoClick();
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
        {
          stateVideo ? ReactDOM.createPortal(
            <div className="buttonVideo">
              <button type="button" onClick={this.handleClick}>back</button>
              <YouTube videoId={video[0].key} opts={opts} />
            </div>,
            this.root) : null}
      </div>
    );
  }
}

Video.propTypes = {
  handleVideoClick: PropTypes.func.isRequired,
  video: PropTypes.arrayOf(PropTypes.object),
  stateVideo: PropTypes.bool.isRequired,
};
Video.defaultProps = {
  video: [],
};

export default Video;