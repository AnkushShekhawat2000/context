import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import CricketerProvider from "./Context/CricketerProvider"

// ReactDOM.render(<App></App>, getElementById("root"))

ReactDOM.render(
   
  <CricketerProvider>
    <App/>
  </CricketerProvider>

  ,

  document.getElementById("root")
)