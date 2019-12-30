import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import FilmItem from '../FilmItem';
import './filmlist.scss';

class FilmList extends Component {
  state = {
    isLoading: false,
  }

  isLoading = () => {
    this.setState({isLoading: true});
  }

  render() {
    const { items, handleVideoClick, filter, gritState } = this.props;
    const { isLoading } = this.state;
    const filmList = classNames("film-list-ul", {"show": isLoading}, {"invisible": !isLoading});
    return (
      <div className="film-list-ul">
        <ul className={filmList}>
          {items.map(item => (
            <FilmItem 
              key={item.id} 
              item={item} 
              handleVideoClick={handleVideoClick} 
              filter={filter} 
              gritState={gritState}
              isLoading={this.isLoading} 
            />
            ))}
        </ul>
        <div>
          <Loading />
        </div>
      </div>
    );
  }
}

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
  filter: PropTypes.string,
  gritState: PropTypes.bool,
};

FilmList.defaultProps = {
  items: [],
  filter:"",
  gritState: true,
};

export default FilmList;
