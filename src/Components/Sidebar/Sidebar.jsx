import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { POPULAR, UPCOMING, TOP_RATED } from '../../constants';

class Sidebar extends Component  {
  componentDidMount() { }

  render() {
    const { handleClick, handleClickStateGrid } = this.props;
    return(
      <div className='sidebar-countainer'>
        <div>
          <Link className="sidebar-button" to="/" onClick={() => handleClick(POPULAR)}>Popular</Link>
          <Link className="sidebar-button" to="/upcoming" onClick={() => handleClick(UPCOMING)}>Upcoming</Link>
          <Link className="sidebar-button" to="/top_rated" onClick={() => handleClick(TOP_RATED)}>Top Rated</Link>
        </div>
        <div>
          <button onClick={handleClickStateGrid} className="button-sudebar-mosaic" type="button">view info</button>
          <button onClick={handleClickStateGrid} className="button-sudebar-block" type="button">view info</button>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleClickStateGrid: PropTypes.func.isRequired,
};

export default Sidebar;