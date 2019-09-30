import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../../action/fetchFilms';
import ImageItem from './ImageItem/ImageItem';
import InformationItem from './InfonationItem/InformationItem';
import './filmitem.scss';

class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm, filter } = this.props;
    getDescriptionFilm(filter);
  }

  render() {
    const {
      handleVideoClick,
      filter,
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
          handleVideoClick={handleVideoClick}
        />
        <InformationItem 
          title={title} 
          vote={vote} 
          genres={genres} 
          id={id} 
          filter={filter} 
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
    getDescriptionFilm: (filter) => dispatch(getDescriptionFilm(id, filter)),
  };
}

FilmItem.propTypes = {
  getDescriptionFilm: PropTypes.func.isRequired,
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(FilmItem)]),
  handleVideoClick: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
FilmItem.defaultProps = {
  item: {},
  filter:"",
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmItem);
