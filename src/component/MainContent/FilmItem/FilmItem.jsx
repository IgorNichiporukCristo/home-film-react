import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import './listStyle.scss';

const ImageItem = ({ image }) => (
  <div className='image-container'>
    <img className='image' alt='' src={`https://image.tmdb.org/t/p/w500${image}`} />
    <div className='image-button-container'>
      <button className='image-button-video' type='button'>
        <div className='image-button-triangle' />
      </button>
      <h4 className='image-text'>play video</h4>
      <button className='image-overview' type="button">
        <h4 className='image-overview-text'>View Info</h4>
      </button>
    </div>
  </div>
);

const InformationItem = ({title, vote, genres})=> (
  <div className='information-countainer'>
    <div className='information-title-vote'>
      <h4 className='information-title'>{title}</h4>
      <h4 className='information-vote'>{vote}</h4>
    </div>
    <h5 className='information-genres'>
      {genres ? genres.map(obj => obj.name).join(', ') : 'Update page'}
    </h5>
  </div>
    );

const ViewInfoWindow = ({title, vote, genres}) => (
  <div className='upwindow'>
    <h4 className='titlewindow'>{title}</h4>
    <h4>{genres ? genres.map(obj => obj.name).join(', ') : 'Update page'}</h4>
    <h4>{vote}</h4>
  </div>
);
  

ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
};
ViewInfoWindow.defaultProps = {
  genres: [],
};
InformationItem.defaultProps = {
  genres: [],
};
InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};
ViewInfoWindow.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm();
  }
  
  render () {
    const { item } = this.props;
    return (
      <li>
        <ImageItem image={item.poster_path} />
        <InformationItem
          title={item.original_title} 
          vote={item.vote_average} 
          genres={item.genres} 
        />
        <ViewInfoWindow 
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
