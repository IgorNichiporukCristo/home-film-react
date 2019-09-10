import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderInformation.scss';

class HeaderInformation extends Component {
  componentDidMount(){}
  
  render(){
    const {title, genres, vote} = this.props;
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
        <div className="header-vote">
          <span>{vote}</span>
        </div>
      </div>
    );
  }
}

HeaderInformation.propTypes = {
  title: PropTypes.string,
  vote: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.object),
};

HeaderInformation.defaultProps = {
  genres: [],
  title: '',
  vote: 0,
};

export default HeaderInformation;
