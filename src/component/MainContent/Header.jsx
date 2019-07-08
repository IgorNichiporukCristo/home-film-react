import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  componentDidMount(){}

  render() {
    const { movie: {id} } = this.props;
    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.currentFilm,
  };
}

Header.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  movie: [],
};

export default connect(
  mapStateToProps
) (Header);
