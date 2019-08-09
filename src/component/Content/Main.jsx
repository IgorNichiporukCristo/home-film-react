
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    const { popular, upcoming, top_rated, movie } = this.props;
    return (
      <Router>
        <div className="main-container">
          {movie ? 
            <Header movie={movie} /> 
            : <div className="header-error" />  }
          <Sidebar />
          <Route path="popular" component={<FilmList items={popular} />} />
          <Route href="upcoming" component={<FilmList items={upcoming} />} />
          <Route href="top_rated" component={<FilmList items={top_rated} />} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    popular: state.popular,
    upcoming: state. upcoming,
    top_rated: state. top_rated,
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
  upcoming: PropTypes.arrayOf(PropTypes.object),
  top_rated: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.instanceOf(Main),
  ]),
};

Main.defaultProps = {
  popular: [],
  upcoming: [],
  top_rated: [],
  movie: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
