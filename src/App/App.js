import React from 'react';
import '../App/App.css';
import Contact from "../Contact/Contact"

function App() {
  return (
    <div className="center">
      <div className="container">
        <div className="left">
        </div>
        <div className="right">
          <div className="form-container">
            <h1>Contact Form</h1>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;