import React from 'react';
import Header from './components/header';
import SecondHeader from './components/secondHeader';
import {ExtendedContent, MainContent} from './contentUI';
import './App.css';
import './css/normalize.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <MainContent />

      <div className="intermediate">
        <p className="addCursor">Call to Action</p>
      </div>

      <ExtendedContent />

      <footer className="main-footer">
      </footer>

    </div>
  );
}

export default App;
