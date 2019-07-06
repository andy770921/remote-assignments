import React from 'react';

const MainContent = () => {
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
const ExtendedContent = () => {
    return (
      <div className="container group extension">
        <p className="content-box first-row">Content Box 5</p>
        <p className="content-box second-row">Content Box 6</p>
        <p className="content-box first-row">Content Box 7</p>
        <p className="content-box second-row">Content Box 8</p>
      </div>
    );
  }
  

export {ExtendedContent, MainContent};