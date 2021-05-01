import React, {useState} from 'react';
import Family from "./Family"
import {MyProvider} from "../context/MyContext"
import "./App.css"

function App() {
  // const [name, setName] = useState("John")
  // const [age, setAge] = useState(33)

  

  //console.log(myState)
  return (
    <MyProvider>
      <div className="App">
          <p>I am the app</p>
          
          <Family/>
      </div>
    </MyProvider>
  )
}

export default App;