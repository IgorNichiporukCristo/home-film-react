import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import FilmItem from './FilmItem';
import './listStyle.scss';

class FilmList extends Component{
  componentDidMount() {
    const { getDescription } = this.props;
    getDescription();
  }

  render() {
    const { items } = this.props;
    console.log(items);
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
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDescription: () => dispatch(getDescriptionFilm),
  };
}

FilmList.propTypes = {
  getDescription: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.array),
};

FilmList.defaultProps = {
  items: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmList);
