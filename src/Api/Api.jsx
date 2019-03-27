 import React from 'react';

function Content (){
  state = {
    result: {},
  }
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=ac122731994c8a0edef1603c3016ac82`)
    .then(res => res.json())
    .then(result => this.setFilms(result))
    .catch(error => error);
  

  setFilms = result => {
    this.setState({ result });
  }
}

export default Content;
