import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  componentDidMount(){}

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>{movie.id}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  movie: [],
};

export default Header;
