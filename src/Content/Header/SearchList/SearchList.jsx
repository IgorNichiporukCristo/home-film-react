import React, { Component } from "react";
import PropTypes from 'prop-types';
//import SearchItem from '../SearchItem';

class SearchList extends Component {
  componentDidMount () {

  }

  render(){
    const { search } = this.props;
    return(
      <div>
        {console.log(search)}
      </div>
      
      // <ul className="search-films">
      //   {search.map(item => (
      //     <SearchItem key={item.id} item={item} />
      //   ))}
      // </ul>
    );
  }
}

SearchList.propTypes = {
  search: PropTypes.arrayOf(PropTypes.object),
};  

SearchList.defaultProps = {
  search: [],
};

export default SearchList;