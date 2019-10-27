import React, { Component } from "react";
import PropTypes from 'prop-types';
import SearchItem from '../SearchItem';
import "./searchlist.scss";

class SearchList extends Component {
  componentDidMount () {

  }

  render(){
    const { search, handleVideoClick } = this.props;
    return(
      <ul className="search-list">
        {search.map(item => (
          <SearchItem key={item.id} item={item} handleVideoClick={handleVideoClick} />
        ))}
      </ul>
    );
  }
}

SearchList.propTypes = {
  search: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
};  

SearchList.defaultProps = {
  search: [],
};

export default SearchList;