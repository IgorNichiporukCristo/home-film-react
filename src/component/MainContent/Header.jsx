import React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  componentDidMount(){}

  render() {
    const { items } = this.props;
    return (
      <div>
        {items ? (
          <h1> 
            {items[0].id } 
          </h1>
          ): null}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     id: state.addFilms.id,
//   };
// }

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  items: [],
};

export default Header;
