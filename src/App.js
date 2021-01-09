import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from "react"
import Muya from "./muya/lib"
function App() {
  const homeboy = useRef(null)
  useEffect(
    ()=>{
      console.log(homeboy)
      const muya = new Muya(homeboy.current)
      homeboy.current.focus()
      window.muya = muya
      muya.init()
    },
    []
  )
  return (
    <div className="App" ref={homeboy}>
    
    </div>
  );
}

export default App;
