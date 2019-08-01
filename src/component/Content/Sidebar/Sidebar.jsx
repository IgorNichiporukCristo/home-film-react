import React, {Component} from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  componentDidMount() {

  }

  render(){
    return(
      <div className='sidebar-countainer'>
        <button className="sidebar-button" type="button">Traiding</button>
        <button className="sidebar-button" type="button">Traiding</button>
        <button className="sidebar-button" type="button">Traiding</button>
        <button className="sidebar-button" type="button">Traiding</button>
      </div>
    );
  }
}

export default Sidebar;