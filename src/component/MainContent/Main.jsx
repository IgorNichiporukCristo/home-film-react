import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilms } from '../action/fetchFilms';
import FilmList from './FilmItem/Filmlist';

class Main extends Component {
  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <FilmList items={movies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
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
};

Main.defaultProps = {
  movies: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
