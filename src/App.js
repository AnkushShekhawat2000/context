import React from "react"
import Hello from "./Components/Hello"
import Hii from "./Components/Hii"
import CricketerProvider from "./Context/CricketerProvider"

const App = () =>{
  return (
    <div>
      <Hello/>
      

      {/* <CricketerProvider>
        <Hii/>
        <Hello/>
      </CricketerProvider>
      <hr></hr> */}

      <Hii/>
    
    </div>
  )
}

export default App