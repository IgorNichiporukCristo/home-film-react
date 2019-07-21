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
    const {
      item: {
        genres,
        poster_path: image,
        original_title: title,
        vote_average: vote,
        overview,
        video,
        id,
      },
    } = this.props;
    return (
      <li className="film-list-li">
        <ImageItem
          image={image}
          title={title}
          vote={vote}
          genres={genres}
          overview={overview}
          video={video}
          id={id}
        />
        <InformationItem title={title} vote={vote} genres={genres} id={id} />
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
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(FilmItem)]),
};
FilmItem.defaultProps = {
  item: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmItem);
