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
    const { overview } = this.props;
    const { showOverview } = this.state;
    return (
      <div className="header-button-overview-countainer">
        {showOverview ? <div className="header-overview"><div className="header-overview-scroll">{overview}</div></div> : null}
        <div className="header-button-countainer">
          <button onClick={this.handleClickVideo} className="header-button" type="button">watch now</button>
          <button onClick={this.handleClick} className="header-button" type="button">view info</button>
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
