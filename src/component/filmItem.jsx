import React, { Component } from 'react';

class FilmItem extends Component {
  render() {
    return <div>{this.props.payload}</div>;
  }
}

FilmItem.propTypes = {};

export default FilmItem;
