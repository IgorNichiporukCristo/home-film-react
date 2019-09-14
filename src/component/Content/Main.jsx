
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchFilms } from '../../action/fetchFilms';
import FilmList from './FilmItem/Filmlist';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Video from './Video/Video';
import './index.scss';

class Main extends Component {
  state = {
    filter: 'popular',
    page: 1,
    showItemVideo: false,
    video: [],
    requestPopular: true,
    requestUpcoming: true,
    requestTopRated: true,
  }

  componentDidMount() {
    const { filter,requestPopular, page } = this.state;
    const { getFilms } = this.props;
    document.addEventListener('scroll', this.trackScrolling);
    if(filter == "popular" && requestPopular){
      getFilms(filter, page);
      this.changeRequestPopular();
    }  
  }

  componentDidUpdate(){
    const { filter, requestUpcoming, requestTopRated, page } = this.state;
    const { getFilms } = this.props;
    if(filter == "upcoming" && requestUpcoming){
      getFilms(filter, page);
      this.changeRequestUpcoming();
    } if (filter == "top_rated" && requestTopRated){
      getFilms(filter, page);
      this.changeRequestTopRated();
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

  handleClickPopular = () => {
    this.setState({ filter: "popular" });
  }

  handleClickUpcoming = () => {
    this.setState({ filter: "upcoming" });
  }

  handleClickTopRated = () => {
    this.setState({ filter: "top_rated" });
  }

  trackScrolling = () => {
    const { filter, page } = this.state;
    const { getFilms } = this.props;
    const wrappedElement = document.getElementById('header');
    let numberPage;
    page == 1 ? numberPage = page + 1 : numberPage = page;
    if (this.isBottom(wrappedElement)) {
      getFilms(filter, numberPage);
      this.setState(prevState => {
        return {page: (page == 1 ? prevState.page + 2: prevState.page + 1)};
     });
      console.log(page);
    }
  };

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  render() {
    const { popular, upcoming, top_rated, movie } = this.props;
    const {  showItemVideo, video, filter } = this.state;
    return (
      <BrowserRouter>
        <div className="main-container" id='header'>
          {movie ? (
            <Header 
              movie={movie} 
              handleVideoClick={this.handleVideoClick} 
              filter={filter}   
            />)
          : <div className="header-error" />  }
          <Sidebar 
            handleClickPopular={this.handleClickPopular}
            handleClickUpcoming={this.handleClickUpcoming}
            handleClickTopRated={this.handleClickTopRated} 
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
