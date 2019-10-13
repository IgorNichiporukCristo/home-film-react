import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBlock extends Component {
  componentDidMount() {}

  render() {
    const { title, overview} = this.props;
    return(
      <div>
        <h1>{title}</h1>
        <h1>{overview}</h1>
      </div>
    );
  }
}

SearchBlock.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  };
  

export default SearchBlock;