
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

  componentDidMount() {
    const {filter} = this.state;
    const { getFilms } = this.props;
    getFilms(filter);
  }

  handleClickPopular = () => {
    this.setState({filter: "popularity" });
  }

  handleClickUpcoming = () => {
    this.setState({filter: "upcoming" });
    const {filter} = this.state;
    const { getFilms } = this.props;
    getFilms(filter);
  }

  handleClickTopRated = () => {
    this.setState({filter: "top_rated" });
    const {filter} = this.state;
    const { getFilms } = this.props;
    getFilms(filter);
  }

  render() {
    const { popular, movie } = this.props;
    const { filter } = this.state;
    return (
      <div className="main-container">
        {movie ? 
          <Header movie={movie} /> 
          : <div className="header-error" />  }
        <Sidebar />
        {filter == 'popular' ? <FilmList items={popular} /> 
        : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popular: state.popular,
    upcoming: state. upcoming,
    top_rated: state. upcoming,
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
  popular: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.instanceOf(Main),
  ]),
};

Main.defaultProps = {
  popular: [],
  movie: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
