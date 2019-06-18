import React from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';

function OverwiewItem ({ condition,title, vote, genres, overview }){
  if (condition){
    return null;
  } else {
    return (
      <div className="overview-container">
        <InformationItem title={title} genres={genres} vote={vote} />
        <p className="title">{overview}</p>
      </div>
    );
  }
}

OverwiewItem.defaultProps = {
  genres: [],
};

OverwiewItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
};

export default OverwiewItem;
