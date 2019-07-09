import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilms } from '../action/fetchFilms';
import FilmList from './FilmItem/Filmlist';
import Header from './Header/Header';
import './index.scss';

class Main extends Component {
  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }


  render() {
    const { movies, movie } = this.props;
    return (
      <div className="main-container">
        {movie ? <Header movie={movie} /> : null }
        <FilmList items={movies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    movie: state.currentFilm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilms: () => dispatch(fetchFilms),
  };
}

Main.propTypes = {
  getFilms: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.arrayOf(PropTypes.object),
};

Main.defaultProps = {
  movies: [],
  movie: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
