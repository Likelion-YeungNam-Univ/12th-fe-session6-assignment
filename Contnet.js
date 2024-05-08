import React from 'react';
import './Content.css';
import VideoCard from '../VideoCard/VideoCard';

function Content() {
    const videos = new Array(5).fill({ title: "Sample Video", views: "1M views", duration: "12:03" }); 
    
    return (
        <div className="main-content">
            {videos.map((video, index) => (
                <VideoCard key={index} video={video} />
            ))}
        </div>
    );
}

export default Content;
