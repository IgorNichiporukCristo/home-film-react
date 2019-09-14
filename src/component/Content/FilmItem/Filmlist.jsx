import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component {
  componentDidMount() {}
  
  render() {
    const { items, handleVideoClick, filter } = this.props;
    return (
      <ul className="film-list-ul" onScroll={this.handleScroll}>
        {items.map(item => (
          <FilmItem key={item.id} item={item} handleVideoClick={handleVideoClick} filter={filter} />
        ))}
      </ul>
    );
  }
}

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

FilmList.defaultProps = {
  items: [],
  filter:"",
};

export default FilmList;
