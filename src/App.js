import './App.css';
import DSA from "./DSA"
import Home from './Home';
import HomeCode from './HomeCode';
import DSA_Problems from './DSA_Problems';
function App() {
 let component 
 switch (window.location.pathname) {
  case "/":
    component=<Home/>
    break;
  case "/Home.js":
      component=<Home />
      break;
  case "/DSA.js":
      component=<DSA/>
      break;
  case "/Aptitude.js":
      component=<HomeCode/>
      break;
  case "/DSA_Problems.js":
      component=<DSA_Problems/>
       break;
  case "/HomeCode.js":
        component=<HomeCode/>
         break;
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
