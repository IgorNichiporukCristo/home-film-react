import React from 'react';
import PropTypes from 'prop-types';
import './ListStyle.scss';

const FilmItem = ({ item }) => (
  <li>
    <img alt="" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /> 
    <div>    
      <h3>{item.original_title}</h3> 
      <h4>{item.vote_average}</h4>
    </div>
  </li>
);

FilmItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object),
};
FilmItem.defaultProps = {
  item: {},
};

export default FilmItem;
