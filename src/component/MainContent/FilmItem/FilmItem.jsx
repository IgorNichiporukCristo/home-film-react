import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import './listStyle.scss';


class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm();
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <img alt="" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /> 
        <div className='stylename'> 
          <h4 className='titlestyle'>{item.original_title}</h4> 
          <h4 className='votestyle'>{item.vote_average}</h4>
        </div> 
        <h4 className='sometext'>{item.genres}</h4>
      </li>
   );
  }
} 

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch, { item: { id } = null }) {
  return {
    getDescriptionFilm: () => dispatch(getDescriptionFilm(id)),
  };
}

FilmItem.propTypes = {
  getDescriptionFilm: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.object),
};
FilmItem.defaultProps = {
  item: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (FilmItem);