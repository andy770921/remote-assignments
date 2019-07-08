import React, { Component } from 'react';
import Header from './components/header';
import SecondHeader from './components/secondHeader';
import { ExtendedContent, MainContent } from './contentUI';
import './App.css';
import './css/normalize.css';
import './css/style.css';

class App extends Component {
  state = {
    extended: false,
    cursorStyle: {}
  };

  handleClickExt = (e) => {
    this.setState(prevState => ({  extended: true , cursorStyle: {cursor: "default"} }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SecondHeader />
        <MainContent />

        <div className="intermediate">
          <p className="addCursor" onClick={this.handleClickExt} style={this.state.cursorStyle}>Call to Action</p>
        </div>

        {(this.state.extended)? <ExtendedContent /> : ''}

        <footer className="main-footer">
        </footer>

      </div>
    );
  }
}

export default App;
