import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { broadcastId } from '../../../action/fetchFilms';
import HeaderInformation from '../../Header/HeaderInformatiom';
import './informationItem.scss';

class InformationItem extends Component {
  handleClick = () => {
    const { putFilmId, filter } = this.props;
    putFilmId(filter);
  };

  render() {
    const { title, vote, genres, gritState, time, stateInference } = this.props;
    const informationItem = classNames("informationitem-title", {"active": stateInference });
    return (
      <div
        className="informationitem-countainer"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        role="button"
        tabIndex="0"
      >
        {gritState ? 
          <HeaderInformation title={title} genres={genres} vote={vote} time={time} /> 
           : (
             <div className="informationitem-title-vote">
               <span className={informationItem}>{title}</span>
               <span className="informationitem-vote">{vote}</span>
             </div>
          )
        }
        {gritState ? null : (
          <span className="informationitem-genres">
            {genres
              ? genres
                  .slice(0, 3)
                  .map(obj => obj.name)
                  .join(', ')
              : 'Update page'}
          </span>
          )
        }
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
  gritState: false,
  time: 0,
  stateInference: false,
};
InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  putFilmId: PropTypes.func.isRequired,
  filter: PropTypes.string,
  gritState: PropTypes.bool,
  time: PropTypes.number,
  stateInference: PropTypes.bool,
};

export default connect(
  null,
  mapDispatchToProps,
)(InformationItem);
