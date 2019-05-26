import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../action/fetchFilms';
import './listStyle.scss';


class FilmItem extends Component {
  componentDidMount() {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm();
  }
  
  onHover(){
    <iframe>
      <video src="https://www.youtube.com/watch?v=AiiXLmqhndU"> 
         <track /> 
      </video>
    </iframe>
  }

  itemConstruсtor(item){
    return ( 
      <Fragment>
        <li>
          <img onMouseOver={this.onHover} onFocus="" alt="" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /> 
          <div className='stylename'> 
            <h4 className='titlestyle'>{item.original_title}</h4> 
            <h4 className='votestyle'>{item.vote_average}</h4>
          </div> 
          <h5 className='genres'>
            {(item.genres) ? item.genres.map(obj => obj.name).join(', ') : 'Loading...'}
          </h5>
        </li>
      </Fragment>);
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
  mapDispatchToProps
) (FilmItem);