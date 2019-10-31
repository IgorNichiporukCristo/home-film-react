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
    pagePopular: 1,
    pageUpcoming: 1,
    pageTop_Rated: 1,
    showItemVideo: false,
    video: [],
    requestUpcoming: true,
    requestTopRated: true,
    requestPopular: true,
    gritStateBlock: true,
    gritStateMosaic: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.definitionPathnamePage();
  }

  definitionPathnamePage = () => {
    const { getFilms } = this.props;
    if (location.pathname == "/") {
      this.setState({filter: POPULAR});
      getFilms(POPULAR, 1);
      this.setState({ requestPopular: false });
    } else {
      this.setState({ filter: location.pathname.substring(1) });
      let filter = location.pathname.substring(1);
      getFilms(filter, 1);
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
    const {  requestUpcoming, requestTopRated, requestPopular, pagePopular, pageUpcoming, pageTop_Rated  } = this.state;
    const { getFilms } = this.props;
    if(filter == UPCOMING && requestUpcoming){
      getFilms(filter, pageUpcoming);
      this.setState({ requestUpcoming: false, filter });
    } if (filter == TOP_RATED && requestTopRated){
      getFilms(filter, pageTop_Rated);
      this.setState({ requestTopRated: false, filter });
    } if(filter == POPULAR && requestPopular){
      getFilms(filter, pagePopular);
      this.setState({ requestPopular: false, filter });
    }else{
      this.setState({ filter });
    }
  }

  trackScrolling = () => {
    const { filter, pagePopular, pageUpcoming, pageTop_Rated } = this.state;
    const { getFilms } = this.props;
    if (document.documentElement.getBoundingClientRect().bottom -100 < document.documentElement.clientHeight) {
      if (filter == POPULAR){
        getFilms(filter, pagePopular + 1);
        this.setState({ pagePopular: pagePopular + 1});
      } if (filter == UPCOMING){
        getFilms(filter, pageUpcoming + 1);
        this.setState({ pageUpcoming: pageUpcoming + 1});
      } if (filter == TOP_RATED) {
        getFilms(filter, pageTop_Rated + 1);
        this.setState({ pageTop_Rated: pageTop_Rated + 1});
      }
    }
  };

  stateListGrid = () => {
    const { gritStateBlock } = this.state;
    this.setState({ gritStateBlock: !gritStateBlock });
    const { gritStateMosaic } = this.state;
    this.setState({ gritStateMosaic: !gritStateMosaic });
  }

  render() {
    const { popular, upcoming, top_rated, movie } = this.props;
    const {  showItemVideo, video, filter, gritStateBlock, gritStateMosaic } = this.state;
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
          <div className="header-sidebar-list">
            <Sidebar 
              handleClickStateGrid={this.stateListGrid}
              handleClick={this.handleFilterState}
              gritStateBlock={gritStateBlock}
              gritStateMosaic={gritStateMosaic}
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
                  gritStateBlock={gritStateBlock}
                  gritStateMosaic={gritStateMosaic}
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
                  gritStateBlock={gritStateBlock}
                  gritStateMosaic={gritStateMosaic} 
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
                  gritStateBlock={gritStateBlock}
                  gritStateMosaic={gritStateMosaic} 
                />)} 
            />
          </div>
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
