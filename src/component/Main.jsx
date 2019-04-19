import React, { Component } from 'react';
import { connect } from 'react-redux';
//import FilmItem from './filmItem';
//import fetchFilms from '../fetchFilms';

class Main extends Component {
  
  componentDidMount() {

  }

  render() {
    console.log(this.props);
      return (
        <div>
          hggh
        </div>
      );
    }
}

function mapStateToProps(state) {
  return{
    todos:state
  };
} 

// const mapStateToProps = 

// const mapDispatchToProps = 

// export default connect(mapStateToProps, mapDispatchToProps)(Main);

export default connect(mapStateToProps)(Main);