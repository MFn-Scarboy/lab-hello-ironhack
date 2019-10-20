import React from 'react';
import './App.css';
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg'
import image1 from './images/icon1.png'
import image2 from './images/icon2.png'
import image3 from './images/icon3.png'
import image4 from './images/icon4.png'

function App() {

  return (
    <div className="App">
      <div className="div1">
        <img src={logo}/>
        <img src={menu}/>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <button>Awesome!</button>
      </div>
      <div className="div2">
        <div className="div3">
          <img src={image1}/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="div3">
          <img src={image2}/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="div3">
          <img src={image3}/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="div3">
          <img src={image4}/>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
        
        
        
        
      </div>
    </div>
  );
}

export default App;
