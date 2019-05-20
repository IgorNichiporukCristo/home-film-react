import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component{
  componentDidMount() {

  }

  render() {
    const { items } = this.props;
    console.log(items);
    return(
      <div>
        <ul>
          {items.map(item => (
            <FilmItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
} 

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array),
};

FilmList.defaultProps = {
  items: [],
};

export default FilmList;
