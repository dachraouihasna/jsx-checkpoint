import React, { Component } from 'react';
import './App.css';
import logo from "./logo192.png"



function App() {
  return (
    <div style={{ borderStyle: "solid", borderColor: "black", maxWidth: 500 }}>
      <h1 className='title red'>Your name here</h1>
      <br />
      <img src={logo} alt='myImage' />
      <br />
      <img src='/logo512.png' />
    </div>
    //<br/>,
    //<h1>hello</h1>
    //<div src={"https://www.youtube.com/embed/76ZUiOxFcgs"} style={{width:320, height:240}}/>
  );
}


export default App;
