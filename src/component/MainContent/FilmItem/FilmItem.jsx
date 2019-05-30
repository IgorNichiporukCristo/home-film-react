import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import './listStyle.scss';

class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm();
  }

  itemConstruсtor(item) {
    return (
      <li>
        <div className="ImageButton">
          <img alt="" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
          <div className="children">
            <button className='button-video' type="button">
              <div className='triangle' />
            </button>
            <h4 className='text-video'>PLAY VIDEO</h4>
            <button className='button-overview' type="button">
              <h4>View Info</h4>
            </button>
          </div>
        </div>
        <div className='info'>
          <div className="titlevote">
            <h4 className="titlestyle">{item.original_title}</h4>
            <h4 className="votestyle">{item.vote_average}</h4>
          </div>
          <h5 className="genres">
            {item.genres ? item.genres.map(obj => obj.name).join(', ') : 'Loading...'}
          </h5>
        </div>
      </li>
    );
  }

  render() {
    const { item } = this.props;
    return this.itemConstruсtor(item);
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
