import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './informationItem.scss';

class InformationItem extends Component{
  componentDidMount(){

  }

  handleClick = () => {
    return console.log("sdgsdg");
  }  

  render(){
    const {title, vote, genres} = this.props;
    return(
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
          {genres? genres.slice(0, 3).map(obj => obj.name).join(', '): 'Update page'}
        </h5>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch, { item: { id } = null }) {
  return {
    getDescriptionFilm: () => dispatch(getFilm(id)),
  };
}

InformationItem.defaultProps = {
  genres: [],
};
InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationItem);
