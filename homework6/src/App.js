import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Video from "./Video";
import ShortsHeader from "./components/ShortsHeader";
import './App.css';


function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Video/>
    <ShortsHeader/>
    </div>
  );
}

export default App;
