import React from 'react';
import PropTypes from 'prop-types';

const VoteStar = ({vote,time}) => {
    let min = time % 60;
    let hours = (time - min) / 60;
    let rezult = `${hours}h ${min}m`;
    return(
      <div className="header-vote">
        <div>
          <div className="header-vote-grey">
            {Array.apply(null, { length: 10 }).map((e) => 
              (
                <div className="star" key={e} />
              ))
            }
          </div>
          <div className="header-vote-yellow">
            {Array.apply(null, { length: vote }).map((e) => 
                (
                  <div className="star star-yellow" key={e} />
                ))
            }
          </div>
        </div>
        <div className="vote-number">{vote}</div>
        <div className="time">{rezult}</div>
      </div>
    );
  };

  VoteStar.propTypes = {
    vote: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  };

  export default VoteStar;