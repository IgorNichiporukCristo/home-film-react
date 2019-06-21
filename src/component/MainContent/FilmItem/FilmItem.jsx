import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import ImageItem from './FilmItemConstructor/ImageItem';
import InformationItem from './FilmItemConstructor/InformationItem';
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
        <ImageItem
          image={item.poster_path}
          title={item.original_title}
          vote={item.vote_average}
          genres={item.genres}
          overview={item.overview}
        />
        <InformationItem
          title={item.original_title}
          vote={item.vote_average}
          genres={item.genres}
        />
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
  mapDispatchToProps,
)(FilmItem);
