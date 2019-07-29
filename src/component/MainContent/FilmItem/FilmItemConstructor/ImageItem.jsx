import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverviewItem from './OverwiewItem';
import './imageItem.scss';
import Video from '../../Video/Video';

class ImageItem extends Component {
  state = {
    showItemOwerwiew: false,
    showItemVideo: false,
  };

  handleItemClick = () => {
    this.setState(state => ({
      showItemOwerwiew: !state.showItemOwerwiew,
    }));
  };

  handleVideoClick = () => {
    this.setState(state => ({
      showItemVideo: !state.showItemVideo,
    }));
  };

  render() {
    const { image, overview, title, vote, genres, video, id } = this.props;
    const { showItemOwerwiew, showItemVideo } = this.state;
    return (
      <div className="image-container">
        <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className="image-button-container">
          <button onClick={this.handleItemClick} className="image-overview" type="button">
            <span className="image-overview-text">View Info</span>
          </button>
          <button className="image-button-video" type="button" onClick={this.handleVideoClick}>
            <div className="image-button-triangle" />
          </button>
        </div>
        <OverviewItem
          handleItemClick={this.handleItemClick}
          stateInference={showItemOwerwiew}
          overview={overview}
          title={title}
          vote={vote}
          genres={genres}
          video={video}
          id={id}
        />
        <Video handleVideoClick={this.handleVideoClick} stateVideo={showItemVideo} video={video} />
      </div>
    );
  }
}

ImageItem.defaultProps = {
  genres: [],
  video: [],
  id: '',
};
ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(ImageItem)]),
  overview: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(ImageItem),
  ]),
};

export default ImageItem;
