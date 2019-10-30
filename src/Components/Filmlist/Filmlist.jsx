import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../FilmItem';
import './filmlist.scss';

class FilmList extends Component {
  componentDidMount() {}
  
  render() {
    const { items, handleVideoClick, filter, gritStateBlock, gritStateMosaic } = this.props;
    return (
      <ul className="film-list-ul">
        {items.map(item => (
          <FilmItem 
            key={item.id} 
            item={item} 
            handleVideoClick={handleVideoClick} 
            filter={filter} 
            gritStateBlock={gritStateBlock} 
            gritStateMosaic={gritStateMosaic}
          />
        ))}
      </ul>
    );
  }
}

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
  filter: PropTypes.string,
  gritStateBlock: PropTypes.bool,
  gritStateMosaic: PropTypes.bool,
};

FilmList.defaultProps = {
  items: [],
  filter:"",
  gritStateBlock: true,
  gritStateMosaic: false,
};

export default FilmList;
