import React from 'react';
import PropTypes from 'prop-types';
import './informationItem.scss';

const InformationItem = ({ title, vote, genres }) => (
  <div className="information-countainer">
    <div className="information-title-vote">
      <h4 className="information-title">{title}</h4>
      <h4 className="information-vote">{vote}</h4>
    </div>
    <h5 className="information-genres">
      {genres? genres.slice(0, 3).map(obj => obj.name).join(', '): 'Update page'}
    </h5>
  </div>
);

InformationItem.defaultProps = {
  genres: [],
};
InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

export default InformationItem;
