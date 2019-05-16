import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component{
  componentDidMount() {
    
  }

  

  render() {
    const { items } = this.props;
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

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDescription: () => dispatch(getDescriptionFilm),
  };
}

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array),
};
FilmList.defaultProps = {
  items: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmList);
