import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { broadcastId } from '../../../../action/fetchFilms';
import './informationItem.scss';

class InformationItem extends Component {
  handleClick = () => {
    const { putFilmId, filter } = this.props;
    putFilmId(filter);
  };

  render() {
    const { title, vote, genres } = this.props;
    return (
      <div
        className="information-countainer"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <div className="information-title-vote">
          <h4 className="information-title">{title}</h4>
          <h4 className="information-vote">{vote}</h4>
        </div>
        <h5 className="information-genres">
          {genres
            ? genres
                .slice(0, 3)
                .map(obj => obj.name)
                .join(', ')
            : 'Update page'}
        </h5>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, { id }) {
  return {
    putFilmId: (filter) => dispatch(broadcastId(id, filter)),
  };
}

InformationItem.defaultProps = {
  genres: [],
  filter:"",
};
InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  putFilmId: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(
  null,
  mapDispatchToProps,
)(InformationItem);