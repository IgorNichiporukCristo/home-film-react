import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./searchblock.scss";

class SearchBlock extends Component {
  componentDidMount() {}

  render() {
    const { image, title, overview} = this.props;
    return(
      <div>
        <img className="image" alt="" src={`https://image.tmdb.org/t/p/w500${image}`} />
        <span>{title}</span>
        <span>{overview}</span>
      </div>
    );
  }
}

SearchBlock.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  };
  

export default SearchBlock;