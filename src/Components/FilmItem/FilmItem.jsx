import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getDescriptionFilm } from '../../action/fetchFilms';
import ImageItem from './ImageItem';
import InformationItem from './InfonationItem';
import './filmitem.scss';

class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm, filter, isLoading } = this.props;
    getDescriptionFilm(filter);
    isLoading();
  }

  render() {
    const {
      handleVideoClick,
      filter,
      gritState,
      item: {
        genres,
        poster_path: image,
        original_title: title,
        vote_average: vote,
        overview,
        video,
        id,
        poster,
        time,
      }
    } = this.props;
    const filmlistli = classNames("film-list-li", {mosaic: !gritState}, {block : gritState});
    return (
      <li className={filmlistli}>
        <ImageItem
          image={image}
          title={title}
          vote={vote}
          genres={genres}
          overview={overview}
          video={video}
          id={id}
          handleVideoClick={handleVideoClick}
          gritState={gritState}
          poster={poster}
          filter={filter}
          time={time}
        />
        {!gritState ? (
          <InformationItem 
            title={title} 
            vote={vote} 
            genres={genres} 
            id={id} 
            filter={filter} 
          />
        ) : null}
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
  gritState: PropTypes.bool,
  isLoading: PropTypes.func.isRequired,
};
FilmItem.defaultProps = {
  item: {},
  filter:"",
  gritState: true,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmItem);
