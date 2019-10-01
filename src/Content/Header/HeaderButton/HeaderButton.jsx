import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './headerbutton.scss';

class HeaderButton extends Component {
  state = {
    showOverview: false,
  };

  handleClick = () => {
    this.setState(state => ({
      showOverview: !state.showOverview,
    })); 
  };

  handleClickVideo = () => {
    const { handleVideoClick, video } = this.props;
      handleVideoClick(video);  
  };

  render() {
    const { overview, video } = this.props;
    const { showOverview } = this.state;
    console.log(video.lenght);
    return (
      <div className="header-button-countainer">
        {showOverview ? <div className="headerbutton-overview">{overview}</div> : null}
        <div className="button-countainer-header">
          <button onClick={this.handleClickVideo} className="button-header" type="button">watch now</button>
          <button onClick={this.handleClick} className="button-header" type="button">view info</button>
        </div>
      </div>
    );
  }
}

HeaderButton.propTypes = {
  overview: PropTypes.string,
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.instanceOf(HeaderButton)]),
  handleVideoClick: PropTypes.func.isRequired,
};

HeaderButton.defaultProps = {
  video: [],
  overview: '',
};

export default HeaderButton;
