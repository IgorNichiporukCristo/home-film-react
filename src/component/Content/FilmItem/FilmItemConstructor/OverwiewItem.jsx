import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';
import Video from '../../Video/Video';

class OverwiewItem extends Component {
  handleClick = () => {
    const { handleItemClick } = this.props;
    handleItemClick();
  };


  handleClickVideo = () => {
    const { handleVideoClick } = this.props;
      handleVideoClick();  
  };

  render() {
    const { stateInference, title, vote, genres, overview, video, id, showItemVideo, handleVideoClick } = this.props;
    return (
      <div>
        {stateInference ? (
          <div className="view-countainer">
            <div className="overview-countainer">
              <button type="button" onClick={this.handleClick}>back</button>
              <InformationItem title={title} genres={genres} vote={vote} id={id} />
              <p className="overview">{overview}</p>
            </div>
            <div className="video-countainer">
              <button
                className="overwiew-button-video"
                type="button"
                onClick={this.handleClickVideo}
              >
                <div className="overwiew-button-triangle" />
              </button>
            </div>
            <Video
              handleVideoClick={handleVideoClick}
              stateVideo={showItemVideo}
              video={video}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

OverwiewItem.defaultProps = {
  genres: [],
  video: [],
  id: '',
};

OverwiewItem.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
  stateInference: PropTypes.bool.isRequired,
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(OverwiewItem)]),
  id: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(OverwiewItem),
  ]),
  showItemVideo: PropTypes.bool.isRequired,
  handleVideoClick: PropTypes.func.isRequired,
};

export default OverwiewItem;
