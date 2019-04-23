import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import FilmItem from './filmItem';
import { fetchFilms } from '../fetchFilms';

class Main extends Component {
  
  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const { movie } = this.props;
      return (
        <div>
          {JSON.stringify(movie)}
          
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
  };
} 

function mapDispatchToProps (dispatch) {
  return {
    getFilms: () => dispatch(fetchFilms)
  };
}

Main.propTypes = {
  getFilms: PropTypes.func.isRequired,
  movie: PropTypes.objectOf(PropTypes.object),
};

Main.defaultProps = {
  movie: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);