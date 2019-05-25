import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component {
  componentDidMount() {

  }

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <FilmItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
} 

FilmList.propTypes = {
  items: PropTypes.objectOf(PropTypes.object),
};

FilmList.defaultProps = {
  items: {},
};

export default FilmList;
