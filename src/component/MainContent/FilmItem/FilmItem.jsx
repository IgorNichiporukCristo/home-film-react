import React from 'react';
import PropTypes from 'prop-types';
import './listStyle.scss';

const FilmItem = ({ item }) => (
  <li>
    <img alt="" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /> 
    <div className='stylename'> 
      <h4 className='titlestyle'>{item.original_title}</h4> 
      <h4 className='votestyle'>{item.vote_average}</h4>
    </div> 
    <h4 className='sometext'>Some text</h4>
  </li>
);

FilmItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object),
};
FilmItem.defaultProps = {
  item: {},
};

export default FilmItem;
