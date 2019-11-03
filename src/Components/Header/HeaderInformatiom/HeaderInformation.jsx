import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VoteStar from '../../VoteStar';
import './HeaderInformation.scss';

class HeaderInformation extends Component {
  componentDidMount(){}

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
        <VoteStar vote={vote} time={time} />
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
