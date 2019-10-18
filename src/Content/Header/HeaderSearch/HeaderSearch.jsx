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
  }
}

  render() {
    const { showsearch } = this.state;
    const { search } = this.props;
    return (
      <div className="header-name-search">
        <h1 className="header-name">Igor_ZBS_PACAN</h1>
        <div className="search-block">
          <input 
            className="header-search" 
            placeholder="Search movies by name..." 
            onChange={event => {this.setState({query: event.target.value});}}
            onKeyDown={this.handleKeyDown} 
          />
          {showsearch ?(
            <div className="search-list-block">
              <SearchList search={search} />
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
};  

HeaderSearch.defaultProps = {
  search: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (HeaderSearch);
