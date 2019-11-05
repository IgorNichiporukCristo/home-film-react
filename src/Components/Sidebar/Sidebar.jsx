import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { POPULAR, UPCOMING, TOP_RATED } from '../../constants';
import BlockList from '../../../image/BlockList.png';
import GridList from '../../../image/GridList.png';

class Sidebar extends Component  {
  componentDidMount() { }

  render() {
    const { handleClick, handleClickStateGrid, gritState } = this.props;
    let image;
    gritState ? image = BlockList : image = GridList;
    return(
      <div className='sidebar-countainer'>
        <div>
          <Link className="sidebar-button" to="/" onClick={() => handleClick(POPULAR)}>Popular</Link>
          <Link className="sidebar-button" to="/upcoming" onClick={() => handleClick(UPCOMING)}>Upcoming</Link>
          <Link className="sidebar-button" to="/top_rated" onClick={() => handleClick(TOP_RATED)}>Top Rated</Link>
        </div>
        <div>
          <button onClick={handleClickStateGrid} className="button-sudebar-mosaic" type="button">
            <img className="button-list-grid" src={image} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleClickStateGrid: PropTypes.func.isRequired,
  gritState: PropTypes.bool.isRequired,
};

export default Sidebar;