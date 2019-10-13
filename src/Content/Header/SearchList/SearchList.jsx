import React, { Component } from "react";
import PropTypes from 'prop-types';
import SearchItem from '../SearchItem';

class SearchList extends Component {
  componentDidMount () {

  }

  render(){
    const { search } = this.props;
    return(
      <ul className="search-films">
        {search.map(item => (
          <SearchItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

SearchList.propTypes = {
  search: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.instanceOf(SearchList)]),
};  

SearchList.defaultProps = {
  search: {},
};

export default SearchList;