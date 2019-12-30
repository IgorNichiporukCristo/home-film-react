import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OverviewItem from '../OwerwiewItem';
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
    const { image, overview, title, vote, genres, video, id, handleVideoClick, gritState, poster, filter, time } = this.props;
    const { showItemOwerwiew } = this.state;
    const ImageInformationItem = classNames("image-button-container", {showItem: !gritState} );
    const ImageCountainer = classNames("image-container", {"grid": !gritState},{"block": gritState});
    return (
      <div className={ImageCountainer}>
        {gritState ? <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${poster}`} />
        : <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />}
        <div className={ImageInformationItem}>
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
          gritState={gritState}
          filter={filter}
          time={time}
        />
      </div>
    );
  }
}

ImageItem.defaultProps = {
  genres: [],
  video: [],
  id: '',
  gritState: false,
  filter: "",
  poster: "",
  time: 0,
};
ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
  filter: PropTypes.string,
  poster: PropTypes.string,
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
  gritState: PropTypes.bool,
  time: PropTypes.number,
};

export default ImageItem;
