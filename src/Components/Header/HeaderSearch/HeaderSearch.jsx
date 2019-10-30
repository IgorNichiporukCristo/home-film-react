import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './headersearch.scss';
import { fetchSearchFilm } from "../../../action/fetchFilms"; 
import SearchList from "../SearchList";

class HeaderSearch extends Component  {
 state = {
   showsearch: false,
   query: "",
 }

 handleKeyDown = (event) => {
  const { fetchSearchFilm } = this.props;
  const { query } = this.state;
  if (event.key === 'Enter'){
    this.setState({showsearch: true});
    fetchSearchFilm(query);
    document.addEventListener('click', this.handleOutsideClick, false);
  }
}

handleOutsideClick = (event) => {
  if (!this.node.contains(event.target)) {
    this.setState({showsearch: false});
  }
}

  render() {
    const { showsearch } = this.state;
    const { search, handleVideoClick } = this.props;
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <div className="header-search-block" ref={node => { this.node = node; }}>
          <input 
            className="header-search" 
            placeholder="Search movies by name..." 
            onChange={event => {this.setState({query: event.target.value});}}
            onKeyDown={this.handleKeyDown} 
          />
          {showsearch ?(
            <div className="search-list-block">
              <SearchList search={search} handleVideoClick={handleVideoClick} />
            </div>
          ): null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearchFilm: (query) => dispatch(fetchSearchFilm(query)),
  };
}

HeaderSearch.propTypes = {
  fetchSearchFilm: PropTypes.func.isRequired,
  search: PropTypes.arrayOf(PropTypes.object),
  handleVideoClick: PropTypes.func.isRequired,
};  

HeaderSearch.defaultProps = {
  search: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (HeaderSearch);
