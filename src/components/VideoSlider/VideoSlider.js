import React from 'react';
import './VideoSlider.css';

const VideoSlider = ({ accommodations, currentSlide, onSlideChange }) => {
  return (
    <div className="video-slider">
      {accommodations.map((accommodation, index) => (
        <video
          key={accommodation.id}
          className={`video-slide ${currentSlide === index ? 'active' : ''}`}
          src={accommodation.video}
          autoPlay
          muted
          loop
          playsInline
          aria-label={`${accommodation.title} ${accommodation.subtitle} video`}
        />
      ))}
    </div>
  );
};

export default VideoSlider;

