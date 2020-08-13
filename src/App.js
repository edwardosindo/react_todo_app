import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
        const firstname = "Edu"
        const lastname = "Ted"
      return (
        <div className="App">
            <h1>Hello {`${firstname} ${lastname}`} </h1>
          <input type="checkbox" />
          <p> Placeholder Text</p>

          <input type="checkbox" />
          <p> Placeholder Text</p>

          <input type="checkbox" />
          <p> Placeholder Text</p>

          <input type="checkbox" />
          <p> Placeholder Text</p>
        </div>
      );
}

export default App;
