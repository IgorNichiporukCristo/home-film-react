import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../../action/fetchFilms';
import "./searchitem.scss";

class SearchItem extends Component {
  componentDidMount () {
   const { getDescriptionFilm } = this.props;
   getDescriptionFilm("search"); 
  }

  handleClickVideo = () => {
    const { handleVideoClick, item: { video }} = this.props;
      handleVideoClick(video);  
  };

  render(){
    const { item : {
      original_title: title,
      overview,
      poster_path: image,
      genres
    }} = this.props;
    return(
      <li className="search-item">
        <img className="search-image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className="search-info">
          <div>
            <div>
              <span className="title-search search-text">{title}</span>
              <button 
                className="search-item-button"
                type="button"
                onClick={this.handleClickVideo}
              >
                <span className="search-item-button-text">Play Trailer</span>
              </button>
            </div>
          </div>
          <span className="search-text search-genres">          
            {genres
              ? genres
              .slice(0, 3)
              .map(obj => obj.name)
              .join(', ')
              : 'Update page'}
          </span>
          <span className="search-text">{overview}</span>
        </div>
      </li>
    );
  }
}

  function mapDispatchToProps(dispatch, { item: { id } = null }) {
    return {
      getDescriptionFilm: (filter) => dispatch(getDescriptionFilm(id, filter)),
    };
  }

  SearchItem.propTypes = {
    getDescriptionFilm: PropTypes.func.isRequired,
    item: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(SearchItem)]),
    handleVideoClick: PropTypes.func.isRequired,
  };
  
  SearchItem.defaultProps = {
    item: [],
  };

export default connect(
  null,
  mapDispatchToProps
  )(SearchItem);