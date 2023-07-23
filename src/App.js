import './App.css';
import { useState } from 'react';
import Home from './Home';
function App() {
  const[open,setOpen]=useState(true);
  return (  
  <div >
      <Home/>
  </div>
  );
}

export default App;
