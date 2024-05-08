import React from 'react';
import VideoGrid from '../VideoGrid/VideoGrid';
import './Shorts.css';

function Shorts() {
    const videos = new Array(8).fill({ title: "Sample Video", views: "1M views", duration: "12:03" }); 
  
    return (
      <div className="Shorts">
          {videos.map((video, index) => (
            <VideoGrid key={index} video={video} />
          ))}
      </div>
    );
  }
  

export default Shorts;
