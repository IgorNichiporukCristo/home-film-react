import React, { Component } from 'react';

class Content extends Component {

  state = {
    result: {},
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=ac122731994c8a0edef1603c3016ac82`)
    .then(res => res.json())
    .then(result => this.setFilms(result))
    .catch(error => error);
  }

  setFilms = result => {
    this.setState({ result });
  }

  render() {
    const { hits = [] } = result;

    return hits;
  }
}

export default Content;
