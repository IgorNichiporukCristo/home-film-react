
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchFilms } from '../../action/fetchFilms';
import FilmList from './FilmItem/Filmlist';
import Header from './Header/Header';
import Sidebar from './Sidebar';
import Video from './Video/Video';
import './index.scss';

class Main extends Component {
  state = {
    filter: "popular",
    page: 1,
    showItemVideo: false,
    video: [],
    requestUpcoming: true,
    requestTopRated: true,
    requestPopular: true,
  }

  componentDidMount() {
    const { page } = this.state;
    const { getFilms } = this.props;
    document.addEventListener('scroll', this.trackScrolling);
    if (location.pathname == "/") {
      this.setState({filter: "popular"});
      let filter = "popular";
      getFilms(filter, page);
      this.changeRequestPopular();
    } else {
      this.setState({ filter: location.pathname.substring(1) });
      let filter = location.pathname.substring(1);
      getFilms(filter, page);
      location.pathname == "/upcoming" ? this.changeRequestUpcoming() : this.changeRequestTopRated();
    }
  }

  componentDidUpdate(){
    const { filter, requestUpcoming, requestTopRated, requestPopular, page } = this.state;
    const { getFilms } = this.props;
    if(filter == "upcoming" && requestUpcoming){
      getFilms(filter, page);
      this.changeRequestUpcoming();
    } if (filter == "top_rated" && requestTopRated){
      getFilms(filter, page);
      this.changeRequestTopRated();
    } if(filter == "popular" && requestPopular){
      getFilms(filter, page);
      this.changeRequestPopular();
    }
  }
  
  changeRequestPopular = () => {
    this.setState({ requestPopular: false });
  }

  changeRequestUpcoming = () => {
    this.setState({ requestUpcoming: false });
  }

  changeRequestTopRated = () => {
    this.setState({ requestTopRated: false });
  }

  handleVideoClick = (video) => {
    this.setState(state => ({
      showItemVideo: !state.showItemVideo,
      video: video,
    }));
  };

  handleFilterState = (filter) => {
    this.setState({ filter });
  }

  trackScrolling = () => {
    const { filter, page } = this.state;
    const { getFilms } = this.props;
    const wrappedElement = document.querySelector('div');
    if (this.isBottom(wrappedElement)) {
      getFilms(filter, page + 1);
      this.setState({ page: page + 1});
    }
  };

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= document.documentElement.clientWidth;
  }

  render() {
    const { popular, upcoming, top_rated, movie } = this.props;
    const {  showItemVideo, video, filter } = this.state;
    return (
      <BrowserRouter>
        <div className="main-container">
          {movie ? (
            <Header 
              movie={movie} 
              handleVideoClick={this.handleVideoClick} 
              filter={filter}   
            />)
          : <div className="header-error" />  }
          <Sidebar 
            handleClick={this.handleFilterState}
          />
          <Route 
            path="/" 
            exact 
            render={(props) => (
              <FilmList 
                {...props}
                items={popular}
                filter={filter} 
                showItemVideo={showItemVideo} 
                handleVideoClick={this.handleVideoClick} 
              />)} 
          />
          <Route 
            path="/upcoming" 
            exact 
            render={(props) => ( 
              <FilmList 
                {...props} 
                items={upcoming} 
                filter={filter} 
                showItemVideo={showItemVideo} 
                handleVideoClick={this.handleVideoClick} 
              />)} 
          />
          <Route 
            path="/top_rated" 
            exact 
            render={(props) => ( 
              <FilmList 
                {...props} 
                items={top_rated}
                filter={filter}  
                showItemVideo={showItemVideo} 
                handleVideoClick={this.handleVideoClick} 
              />)} 
          />
          <Video 
            handleVideoClick={this.handleVideoClick} 
            stateVideo={showItemVideo} 
            video={video} 
          />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    popular: state.popular,
    upcoming: state.upcoming,
    top_rated: state.top_rated,
    movie: state.currentFilm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilms: (filter, page) => dispatch(fetchFilms(filter, page)),
  };
}

Main.propTypes = {
  getFilms: PropTypes.func.isRequired,
  popular: PropTypes.arrayOf(PropTypes.object),
  upcoming: PropTypes.arrayOf(PropTypes.object),
  top_rated: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.instanceOf(Main),
  ]),
};

Main.defaultProps = {
  popular: [],
  upcoming: [],
  top_rated: [],
  movie: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
