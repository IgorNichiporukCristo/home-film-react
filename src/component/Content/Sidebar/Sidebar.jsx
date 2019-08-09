import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {}

  handleClickPopularity= () => {
    const { handleClickPopular } = this.props;
    handleClickPopular();
  }

  handleClickComing = () => {
    const { handleClickUpcoming } = this.props;
    handleClickUpcoming();
  }

  handleClickRated = () => {
    const { handleClickTopRated } = this.props;
    handleClickTopRated ();
  }

  render(){
    return(
      <div className='sidebar-countainer'>
        <Link className="sidebar-button" to="/" onClick={this.handleClickPopularity}>Popular</Link>
        <Link className="sidebar-button" to="/upcoming" onClick={this.handleClickComing}>Upcoming</Link>
        <Link className="sidebar-button" to="/top_rated" onClick={this.handleClickRated}>Top Rated</Link>
      </div>
    );
  }
}

Sidebar.propTypes = {
  handleClickUpcoming: PropTypes.func.isRequired,
  handleClickPopular: PropTypes.func.isRequired,
  handleClickTopRated: PropTypes.func.isRequired,

};

export default Sidebar;