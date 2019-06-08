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

  ViewInfoClick(){

  }

  ImageItem(props){
    return(
      <div className='ImageItem'>
        <img alt="" src={`https://image.tmdb.org/t/p/w500${props.image}`} />
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
    ); 
  }

  UpWindow(props){
    return(
      <div className='upwindow'>
        <h4 className='titlewindow'>{props.title}</h4>
        <h4>{props.genres}</h4>
        <h4>{props.vote}</h4>
      </div>
    );
  }

  InformationItem(props){
    return(
      <div className='info'>
        <div className='titlevote'>
          <h4 className='titlestyle'>{props.title}</h4>
          <h4 className='votestyle'>{props.vote}</h4>
        </div>
        <h5 className='genres'>
          {props.genres ? props.genres.map(obj => obj.name).join(', ') : 'Loading...'}
        </h5>
      </div>
    );
  }

  itemConstruсtor(item) {
    return (
      <li>
        <this.ImageItem image={item.poster_path} />
        <this.InformationItem 
          title={item.original_title} 
          vote={item.vote_average} 
          genres={item.genres} 
        />
        <this.UpWindow 
          title={item.original_title} 
          vote={item.vote_average} 
          genres={item.genres}
        />
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
