import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchFilms } from '../action/fetchFilms';
import FilmList from './Filmlist';
import Header from './Header';
import Sidebar from './Sidebar';
import Video from './Video';
import './index.scss';
import { POPULAR, UPCOMING, TOP_RATED } from '../constants';

class Main extends Component {
  state = {
    filter: POPULAR,
    page: 1,
    showItemVideo: false,
    video: [],
    requestUpcoming: true,
    requestTopRated: true,
    requestPopular: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.definitionPathnamePage();
  }

  definitionPathnamePage = () => {
    const { page } = this.state;
    const { getFilms } = this.props;
    if (location.pathname == "/") {
      this.setState({filter: POPULAR});
      getFilms(POPULAR, page);
      this.setState({ requestPopular: false });
    } else {
      this.setState({ filter: location.pathname.substring(1) });
      let filter = location.pathname.substring(1);
      getFilms(filter, page);
      location.pathname == "/upcoming" ? this.setState({ requestUpcoming: false }) : this.setState({ requestTopRated: false });
    }
  }

  handleVideoClick = (video) => {
    this.setState(state => ({
      showItemVideo: !state.showItemVideo,
      video: video,
    }));
  };

  handleFilterState = (filter) => {
    this.setState({ filter });
    const {  requestUpcoming, requestTopRated, requestPopular, page } = this.state;
    const { getFilms } = this.props;
    if(filter == UPCOMING && requestUpcoming){
      getFilms(filter, page);
      this.setState({ requestUpcoming: false });
    } if (filter == TOP_RATED && requestTopRated){
      getFilms(filter, page);
      this.setState({ requestTopRated: false });
    } if(filter == POPULAR && requestPopular){
      getFilms(filter, page);
      this.setState({ requestPopular: false });
    }
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