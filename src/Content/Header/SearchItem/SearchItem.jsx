import React, { Component } from "react";
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { getDescriptionFilm } from '../../../action/fetchFilms';
import "./searchitem.scss";

class SearchItem extends Component {
  componentDidMount () {
   // const { getDescriptionFilm } = this.props;
   // getDescriptionFilm("search"); 
  }

  render(){
    const { item : {
      original_title: title,
      overview,
      poster_path: image,
    }} = this.props;
    return(
      <li className="search-item">
        <img className="search-image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className="search-info">
          <span className="title-search">{title}</span>
          <span>{overview}</span>
        </div>
      </li>
    );
  }
}

// function mapStateToProps(state) {
//     return {
//       items: state.items,
//     };
//   }
  
//   function mapDispatchToProps(dispatch, { item: { id } = null }) {
//     return {
//       getDescriptionFilm: (filter) => dispatch(getDescriptionFilm(id, filter)),
//     };
//   }

  SearchItem.propTypes = {
    // getDescriptionFilm: PropTypes.func.isRequired,
    item: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(SearchItem)]),
  };
  
  SearchItem.defaultProps = {
    item: [],
  };

export default SearchItem;