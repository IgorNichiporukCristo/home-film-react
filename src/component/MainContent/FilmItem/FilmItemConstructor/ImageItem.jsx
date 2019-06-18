import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './imageItem.scss';

class ImageItem extends Component{
  constructor(props){
    super(props);
    this.state = {showItem: true}
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.setState(state => ({
      showItem: !state.showItem
    }));
  }

  render() {
    return (
      <div className='image-container'>
        <img className='image' alt='' src={`https://image.tmdb.org/t/p/w500${image}`} />
        <div className='image-button-container'>
          <button className='image-button-video' type='button'>
            <div className='image-button-triangle' />
          </button>
          <h4 className='image-text'>play video</h4>
          <button onClick={this.handleItemClick} className='image-overview' type='button'>
            <h4 className='image-overview-text'>{this.state.showWarning ? 'Hide' : 'Show'}</h4>
          </button>
          <OverviewItem 
            condition={this.state.showItem}
            overview={overview}
            title={title}
            vote={vote}
            genres={genres}
          />
        </div>
      </div>
    )
  }
}

ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageItem;
