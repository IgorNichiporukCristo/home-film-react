import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { POPULAR, UPCOMING, TOP_RATED } from '../../constants';


const Sidebar = ({ handleClick }) => (
  <div className='sidebar-countainer'>
    <Link className="sidebar-button" to="/" onClick={() => handleClick(POPULAR)}>Popular</Link>
    <Link className="sidebar-button" to="/upcoming" onClick={() => handleClick(UPCOMING)}>Upcoming</Link>
    <Link className="sidebar-button" to="/top_rated" onClick={() => handleClick(TOP_RATED)}>Top Rated</Link>
  </div>
);

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;