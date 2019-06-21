import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './overwiewItem.scss';
import InformationItem from './InformationItem';
//import {handleItemClick} from './ImageItem';

class OverwiewItem extends Component{
  componentDidMount(){ 
  }
  
 // handleClick = ()=>this.props.handleItemClick();
  

  render() {
    const { condition, title, vote, genres, overview } = this.props;
    return (
      <div>
        {
        condition ? (null) : (
          <div className="overview-container">
            <button type="button" onClick={this.handleClick}>back</button>
            <InformationItem title={title} genres={genres} vote={vote} />
            <p className="title">{overview}</p>
          </div>
        )}
      </div>  
    );
  }
}

// function OverwiewItem({ condition, title, vote, genres, overview }) {
//   if (condition) {
//     return null;
//   } else {
//     return (
//       <div className="overview-container">
//         <button type="button" onClick={() => { this.props.handleItemClick();}}>Запустить бумеранг</button>
//         <InformationItem title={title} genres={genres} vote={vote} />
//         <p className="title">{overview}</p>
//       </div>
//     );
//   }
// }

OverwiewItem.defaultProps = {
  genres: [],
};

OverwiewItem.propTypes = {
  //handleItemClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
};

export default OverwiewItem;
