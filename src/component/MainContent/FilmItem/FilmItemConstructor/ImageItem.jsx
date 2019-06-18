import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverviewItem from './OverwiewItem';
import './imageItem.scss';

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showItem: true };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.setState(state => ({
      showItem: !state.showItem,
    }));
  }

  render() {
    const { image,overview,title,vote,genres } = this.props;
    const { showItem } = this.state;
    return (
      <div className="image-container">
        <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className="image-button-container">
          <button className="image-button-video" type="button">
            <div className="image-button-triangle" />
          </button>
          <h4 className="image-text">play video</h4>
          <button onClick={this.handleItemClick} className="image-overview" type="button">
            <h4 className="image-overview-text">
              {showItem ? 'Hide' : 'Show'}
            </h4>
          </button>
          <OverviewItem
            condition={showItem}
            overview={overview}
            title={title}
            vote={vote}
            genres={genres}
          />
        </div>
      </div>
    );
  }
}

ImageItem.defaultProps = {
  genres: [],
};
ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
};

export default ImageItem;
