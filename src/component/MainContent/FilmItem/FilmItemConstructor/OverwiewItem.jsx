import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';

class OverwiewItem extends Component {
  componentDidMount() {}

  handleClick = () => {
    const { handleItemClick } = this.props;
    handleItemClick();
  };

  render() {
    const { stateInference, title, vote, genres, overview } = this.props;
    return (
      <div>
        {stateInference ? (
          <div className="view-countainer">
            <div className="overview-countainer">
              <button type="button" onClick={this.handleClick}>back</button>
              <InformationItem title={title} genres={genres} vote={vote} />
              <p className="overview">{overview}</p>
            </div>
            <div className="video-countainer" />
          </div>
        ) : null}
      </div>
    );
  }
}

OverwiewItem.defaultProps = {
  genres: [],
};

OverwiewItem.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
  stateInference: PropTypes.bool.isRequired,
};

export default OverwiewItem;
