import React from 'react';
import PropTypes from 'prop-types';
import './imageItem.scss';

const Show = () => (
  alert('sometext')
);

const ImageItem = ({ image }) => (
  <div className='image-container'>
    <img className='image' alt='' src={`https://image.tmdb.org/t/p/w500${image}`} />
    <div className='image-button-container'>
      <button className='image-button-video' type='button'>
        <div className='image-button-triangle' />
      </button>
      <h4 className='image-text'>play video</h4>
      <button onClick={Show} className='image-overview' type='button'>
        <h4 className='image-overview-text'>View Info</h4>
      </button>
    </div>
  </div>
);

ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageItem;
