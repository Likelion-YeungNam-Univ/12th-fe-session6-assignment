import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Shorts from './components/Shorts/Shorts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Shorts />
    </div>
  );
}

export default App;