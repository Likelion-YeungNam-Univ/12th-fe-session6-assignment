import React from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoThumbnails from './VideoThumbnails';

const videos = [
  {
    title: "동영상 제목 1",
    channel: "채널명 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 2",
    channel: "채널명 2",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 3",
    channel: "채널명 3",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 4",
    channel: "채널명 4",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 5",
    channel: "채널명 5",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 6",
    channel: "채널명 6",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 7",
    channel: "채널명 7",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    title: "동영상 제목 8",
    channel: "채널명 8",
    thumbnail: "https://via.placeholder.com/200",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <VideoThumbnails videos={videos} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
