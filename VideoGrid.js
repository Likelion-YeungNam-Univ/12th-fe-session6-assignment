import React from 'react';
import './VideoGrid.css';
import videoImage from './video.png';  

function VideoGrid({ video }) {
    return (
      <div className="video-grid">
        <img src={videoImage} alt="Thumbnail" className="video-thumbnail" />
        <div className="video-info">
          <h5>{video.title}</h5>
          <p>{video.views} • {video.duration}</p>
        </div>
      </div>
    );
}

export default VideoGrid;
