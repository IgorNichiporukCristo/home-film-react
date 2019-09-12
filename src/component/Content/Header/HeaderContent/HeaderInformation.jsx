import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderInformation.scss';

class HeaderInformation extends Component {
  componentDidMount(){}
  
  VoteStar = (vote,time) => {
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
  }
  

  render(){
    const {title, genres, vote, time} = this.props;
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
        {this.VoteStar(vote,time)}
      </div>
    );
  }
}

HeaderInformation.propTypes = {
  title: PropTypes.string,
  vote: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.object),
  time: PropTypes.number,
};

HeaderInformation.defaultProps = {
  genres: [],
  title: '',
  vote: 0,
  time: 0,
};

export default HeaderInformation;
