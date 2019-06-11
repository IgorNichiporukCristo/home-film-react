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
        <h4>View Info</h4>
      </button>
    </div>
  </div>
);

ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
};

class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm();
  }
  

  // UpWindow(props){
  //   return(
  //     <div className='upwindow'>
  //       <h4 className='titlewindow'>{props.title}</h4>
  //       <h4>{props.genres}</h4>
  //       <h4>{props.vote}</h4>
  //     </div>
  //   );
  // }

  // InformationItem(props){
  //   return(
  //     <div className='info'>
  //       <div className='titlevote'>
  //         <h4 className='titlestyle'>{props.title}</h4>
  //         <h4 className='votestyle'>{props.vote}</h4>
  //       </div>
  //       <h5 className='genres'>
  //         {props.genres ? props.genres.map(obj => obj.name).join(', ') : 'Loading...'}
  //       </h5>
  //     </div>
  //   );
  // }

  // itemConstruсtor(item) {
  //   return (
  //     <li>
        
  //       {/* <this.InformationItem
  //         key={item.id}
  //         title={item.original_title} 
  //         vote={item.vote_average} 
  //         genres={item.genres} 
  //       />
  //       <this.UpWindow 
  //         key={item.id}
  //         title={item.original_title} 
  //         vote={item.vote_average} 
  //         genres={item.genres}
  //       /> */}
  //     </li>
  //   );
  // }

  render () {
    const { item } = this.props;
    return (
      <li>
        <ImageItem image={item.poster_path} />
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
