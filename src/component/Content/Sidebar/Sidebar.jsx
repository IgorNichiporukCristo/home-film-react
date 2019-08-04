import React, {Component} from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  componentDidMount() {

  }

  render(){
    return(
      <div className='sidebar-countainer'>
        <button className="sidebar-button" type="button" onClick={this.PopularClick}>Popular</button>
        <button className="sidebar-button" type="button" onClick={this.UpcomingClick}>Upcoming</button>
        <button className="sidebar-button" type="button" onClick={this.TopRatedClick}>Top Rated</button>
      </div>
    );
  }
}

export default Sidebar;