import React from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Video from "./components/Video";
import ShortsHeader from "./components/ShortsHeader";
import Shorts from "./components/Shorts";
import './css/App.css';


function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Video/>
    <ShortsHeader/>
    <Shorts/>
    </div>
  );
}

export default App;
