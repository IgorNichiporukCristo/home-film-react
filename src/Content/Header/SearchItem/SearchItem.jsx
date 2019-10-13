import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDescriptionFilm } from '../../../action/fetchFilms';
import SearchBlock from '../SearchBlock';

class SearchItem extends Component {
  componentDidMount () {
    const { getDescriptionFilm } = this.props;
    getDescriptionFilm("search"); 
  }

  render(){
    const { item : {
      original_title: title,
      overview,
    }} = this.props;
    return(
      <li>
        <SearchBlock 
          title={title}
          overview={overview}
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

  SearchItem.propTypes = {
    getDescriptionFilm: PropTypes.func.isRequired,
    item: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(SearchItem)]),
  };
  
  SearchItem.defaultProps = {
    item: [],
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchItem);