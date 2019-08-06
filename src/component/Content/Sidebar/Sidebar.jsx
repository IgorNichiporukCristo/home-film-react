import React, {Component} from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  componentDidMount() {

  }

  render(){
    return(
      <div className='sidebar-countainer'>
        <button className="sidebar-button" type="button" onClick={this.handleClickPopular}>Popular</button>
        <button className="sidebar-button" type="button" onClick={this.handleClickUpcoming}>Upcoming</button>
        <button className="sidebar-button" type="button" onClick={this.handleClickTopRated}>Top Rated</button>
      </div>
    );
  }
}

export default Sidebar;