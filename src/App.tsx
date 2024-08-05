// import HomePage from './components/HomePage';
import Navbar   from './components/Navbar';
import './App.css'
import HowItWorks from './components/information/howitworks';
import WhatDoesItDo from './components/information/whatdoesitdo';
function App() {


  return (
    <>
      <Navbar/>
      {/* <HomePage/> */}
      <HowItWorks/>
      <WhatDoesItDo/>
    </>
  )
}

export default App
