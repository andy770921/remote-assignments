import React from 'react';
import './App.css';
import './css/normalize.css';
import './css/style.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container group">
        <h3 className="website-title">Website Title / Logo</h3>
        <ul className="main-nav">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
        <div className="manu_btn"></div>
        <div className="cross"></div>
      </div>
    </header>
  );
}

const Second_Header = () => {
  return (
    <div className="second-header">
      <div className="container">
        <h1 id="mainTitle" className="addCursor">Welcome Message</h1>
      </div>
    </div>
  );
}

const Main_Content = () => {
  return (
    <div className="container group">
      <h2>Section Title</h2>
      <p className="content-box first-row">Content Box 1</p>
      <p className="content-box second-row">Content Box 2</p>
      <p className="content-box first-row">Content Box 3</p>
      <p className="content-box second-row">Content Box 4</p>
    </div>
  );
}

const Extended_Content = () => {
  return (
    <div className="container group extension">
      <p className="content-box first-row">Content Box 5</p>
      <p className="content-box second-row">Content Box 6</p>
      <p className="content-box first-row">Content Box 7</p>
      <p className="content-box second-row">Content Box 8</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Second_Header />
      <Main_Content />

      <div className="intermediate">
        <p className="addCursor">Call to Action</p>
      </div>

      <Extended_Content />

      <footer className="main-footer">
      </footer>

    </div>
  );
}

export default App;
