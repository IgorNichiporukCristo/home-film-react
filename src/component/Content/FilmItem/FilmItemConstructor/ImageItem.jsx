import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverviewItem from './OverwiewItem';
import './imageItem.scss';

class ImageItem extends Component {
  state = {
    showItemOwerwiew: false,
  };

  handleItemClick = () => {
    this.setState(state => ({
      showItemOwerwiew: !state.showItemOwerwiew,
    }));
  };

  handleClickVideo = () => {
    const { handleVideoClick, video } = this.props;
      handleVideoClick(video);  
  };

  render() {
    const { image, overview, title, vote, genres, video, id, handleVideoClick } = this.props;
    const { showItemOwerwiew } = this.state;
    return (
      <div className="image-container">
        <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className="image-button-container">
          <button onClick={this.handleItemClick} className="image-overview" type="button">
            <span className="image-overview-text">View Info</span>
          </button>
          <button className="image-button-video" type="button" onClick={this.handleClickVideo}>
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
          handleVideoClick={handleVideoClick}
        />
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
  handleVideoClick: PropTypes.func.isRequired,
};

export default ImageItem;
