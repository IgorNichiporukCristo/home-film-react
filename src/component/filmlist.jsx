import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from './filmItem';
import './ListStyle.scss';

const FilmList = ({ items }) => (
  <ul>
    {items.map(item => (
      <FilmItem key={item.id} item={item} />
    ))}
  </ul>
);

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array),
};
FilmList.defaultProps = {
  items: [],
};

export default FilmList;
