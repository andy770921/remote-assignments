import React, { Component } from 'react';
import Header from './components/header';
import SecondHeader from './components/secondHeader';
import { ExtendedContent, MainContent } from './contentUI';
import './App.css';
import './css/normalize.css';
import './css/style.css';

class App extends Component {

  handleClickExt = (e) => {
    e.target.parentNode.nextElementSibling.style.display = "block";
    e.target.style.cursor = "default";
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SecondHeader />
        <MainContent />

        <div className="intermediate">
          <p className="addCursor" onClick={this.handleClickExt}>Call to Action</p>
        </div>

        <ExtendedContent />

        <footer className="main-footer">
        </footer>

      </div>
    );
  }
}

export default App;
