import './App.css';
import { useState } from 'react';
import DSA from "./DSA"
import Home from './Home';
function App() {
 let component 
 switch (window.location.pathname) {
  case "/":
    component=<Home/>
    break;
  case "/Home.js":
      component=<Home/>
      break;
  case "/DSA.js":
    component=<DSA/>
  default:
    break;
 }
  return (  
  <div >
      {component}
  </div>
  );
}

export default App;
