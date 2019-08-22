import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';

class OverwiewItem extends Component {
  handleClick = () => {
    const { handleItemClick } = this.props;
    handleItemClick();
  };

  handleClickVideo = () => {
    const { handleVideoClick, video } = this.props;
      handleVideoClick(video);  
  };

  render() {
    const { stateInference, title, vote, genres, overview, id } = this.props;
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
  handleVideoClick: PropTypes.func.isRequired,
};

export default OverwiewItem;
