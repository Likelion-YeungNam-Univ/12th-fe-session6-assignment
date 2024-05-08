import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './MainContent.css';

function MainContent() {
    const videos = new Array(5).fill({ title: "Sample Video", views: "1M views", duration: "12:03" }); 
  
    return (
      <div className="main-content">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    );
  }
  

export default MainContent;
