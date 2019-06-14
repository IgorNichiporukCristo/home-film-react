import React from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';

const OverwiewItem = ({ title, vote, genres,overview }) => (
  <div className='overview-container'>
    <InformationItem title={title} genres={genres} vote={vote} />
    <h4 className='title'>{overview}</h4>
  </div>
);

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
