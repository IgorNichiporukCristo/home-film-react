import React, {Component} from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {

  }

  render(){
    return(
      <div className='sidebar-countainer'>
        <Link className="sidebar-button" href="popular" onClick={this.handleClickPopular}>Popular</Link>
        <Link className="sidebar-button" href="upcoming" onClick={this.handleClickUpcoming}>Upcoming</Link>
        <Link className="sidebar-button" href="top_rated" onClick={this.handleClickTopRated}>Top Rated</Link>
      </div>
    );
  }
}

export default Sidebar;