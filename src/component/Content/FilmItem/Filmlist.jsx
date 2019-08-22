import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component {
  componentDidMount() {}

  render() {
    const { items, handleVideoClick } = this.props;
    return (
      <ul className="film-list-ul">
        {items.map(item => (
          <FilmItem key={item.id} item={item} handleVideoClick={handleVideoClick} />
        ))}
      </ul>
    );
  }
}

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
};

FilmList.defaultProps = {
  items: [],
};

export default FilmList;
