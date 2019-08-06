
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilms } from '../action/fetchFilms';
import FilmList from './FilmItem/Filmlist';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './index.scss';

class Main extends Component {
  state = {
    filter: 'popular'
  }

  // handleClickPopular = () => {
  //   this.setState({filter: "popularity" });
  // }
  // handleClickUpcoming = () => {
  //   this.setState({filter: "popularity" });
  // }
  // handleClickTopRated = () => {
  //   this.setState({filter: "popularity" });
  // }
  
  componentDidMount() {
    const {filter} = this.state;
    const { getFilms } = this.props;
    getFilms(filter);
  }

  render() {
    const { movies, movie } = this.props;
    return (
      <div className="main-container">
        {movie ? 
          <Header movie={movie} /> 
          : <div className="header-error" />  }
        <Sidebar />
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
    getFilms: (filter) => dispatch(fetchFilms(filter)),
  };
}

Main.propTypes = {
  getFilms: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.instanceOf(Main),
  ]),
};

Main.defaultProps = {
  movies: [],
  movie: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
