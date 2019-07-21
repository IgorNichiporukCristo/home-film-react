import React from 'react';
import PropTypes from 'prop-types';
import './HeaderInformation.scss';

const HeaderInformation = ({ title, genres, vote }) => {
  return (
    <div className="header-content-countainer">
      <span className="header-title">{title}</span>
      <div>
        <ul className="header-genres-ul">
          {genres
            ? genres.map(obj => (
              <li key={obj.name} className="header-genres-li">
                {obj.name}
              </li>
              ))
            : 'Update page'}
        </ul>
      </div>
      <span className="header-vote">{vote}</span>
    </div>
  );
};

HeaderInformation.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

HeaderInformation.defaultProps = {
  genres: [],
};

export default HeaderInformation;
