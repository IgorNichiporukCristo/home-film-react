import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { POPULAR, UPCOMING, TOP_RATED } from '../../constants';
import BlockList from '../../../image/BlockList.png';
import GridList from '../../../image/GridList.png';

class Sidebar extends Component  {
  componentDidMount() { }

  render() {
    const { handleClick, handleClickStateGrid, handleClickStateBlock, gritState , filter } = this.props;
    const sidebarListBlock = classNames ("button-sudebar-list", {"active": gritState});
    const sidebarListMosaik = classNames ("button-sudebar-list", {"active": !gritState});
    const sidebarPopular = classNames ("sidebar-button", {"active": ("popular"==filter)});
    const sidebarUpcoming = classNames ("sidebar-button", {"active": ("upcoming"==filter)});
    const sidebarTopRated = classNames ("sidebar-button", {"active": ("top_rated"==filter)});
    return(
      <div className='sidebar-countainer'>
        <div>
          <Link className={sidebarPopular} to="/" onClick={() => handleClick(POPULAR)}>Popular</Link>
          <Link className={sidebarUpcoming} to="/upcoming" onClick={() => handleClick(UPCOMING)}>Upcoming</Link>
          <Link className={sidebarTopRated} to="/top_rated" onClick={() => handleClick(TOP_RATED)}>Top Rated</Link>
        </div>
        <div>
          <button onClick={handleClickStateGrid} className={sidebarListMosaik} type="button">
            <img className="sidebar-button-list" src={GridList} alt="" />
          </button>
          <button onClick={handleClickStateBlock} className={sidebarListBlock} type="button">
            <img className="sidebar-button-list" src={BlockList} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleClickStateGrid: PropTypes.func.isRequired,
  handleClickStateBlock: PropTypes.func.isRequired,
  gritState: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Sidebar;