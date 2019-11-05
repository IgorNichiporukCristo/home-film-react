import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './overwiewItem.scss';
import InformationItem from '../InfonationItem/InformationItem';

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
    const { stateInference, title, vote, genres, overview, id, filter, gritState, time } = this.props;
    const overviewCountainer = classNames("overview-countainer", {"overview-size-mosaic": !gritState}, {"overview-size-block" : gritState});
    const overviewCountainerInformation= classNames("overview-countainer-information", {"sizeblock": gritState});
    const overviewText=classNames("overview",{ "overview-grid": !gritState}, {"overview-block": gritState});
    const overviewVideoCountainer=classNames("overview-video-countainer",{"black": !gritState});
    const overviewButtonVideo=classNames("overwiew-button-video",{"grid": !gritState},{"block": gritState});
    return (
      <div>
        {stateInference || gritState ? (
          <div className={overviewCountainer}>
            <div className={overviewCountainerInformation}>
              {!gritState ? (
                <button className="overview-buttom-back" type="button" onClick={this.handleClick}>X</button>
              ) : null}
              <InformationItem title={title} genres={genres} vote={vote} id={id} filter={filter} gritState={gritState} time={time} stateInference={stateInference} />
              <p className={overviewText}>{overview}</p>
            </div>
            <div className={overviewVideoCountainer}>
              <button
                className={overviewButtonVideo}
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
  gritState: false,
};

OverwiewItem.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
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
  gritState: PropTypes.bool,
  time: PropTypes.number.isRequired,
};

export default OverwiewItem;
