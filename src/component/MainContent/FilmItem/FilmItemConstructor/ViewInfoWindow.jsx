import React from 'react';
import PropTypes from 'prop-types';
import './constructorStyle.scss';

const ViewInfoWindow = ({ title, vote, genres }) => (
  <div className='upwindow'>
    <h4 className='titlewindow'>{title}</h4>
    <h4>{genres ? genres.map(obj => obj.name).join(', ') : 'Update page'}</h4>
    <h4>{vote}</h4>
  </div>
);

ViewInfoWindow.defaultProps = {
  genres: [],
};

ViewInfoWindow.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

export default ViewInfoWindow;
