import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = ({ handleClick }) => (
  <div className='sidebar-countainer'>
    <Link className="sidebar-button" to="/" onClick={() => handleClick('popular')}>Popular</Link>
    <Link className="sidebar-button" to="/upcoming" onClick={() => handleClick('upcoming')}>Upcoming</Link>
    <Link className="sidebar-button" to="/top_rated" onClick={() => handleClick('top_rated')}>Top Rated</Link>
  </div>
);

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;