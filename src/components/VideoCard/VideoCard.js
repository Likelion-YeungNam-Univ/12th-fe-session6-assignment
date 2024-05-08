import React from 'react';
import './VideoCard.css';
import videoImage from './video.png'; 

function VideoCard({ video }) {
    return (
      <div className="video-card">
        <img src={videoImage} alt="Thumbnail" className="video-thumbnail" />
        <div className="video-info">
          <h5>{video.title}</h5>
          <p>{video.views} • {video.duration}</p>
        </div>
      </div>
    );
  }

export default VideoCard;
