import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext"
import axios from "axios"



const weatherUrl = "http://api.weatherstack.com/current?access_key="
const apiKey = "212ba3f732c128c8ba096b6cd8e1dd11";




const AddCityButton = () => {

  const [warning, setWarning] = useState(false);
  const [name, setName] = useState([]);
  const [warningCity, setWarningCity] = useState("")

  const {addCity} = useContext(WeatherContext); 

  
  
  const handleChange=(e)=>{
    setName(e.target.value)
  }

  const submitCity = () => {

    setWarningCity(name)

    axios.get(weatherUrl+apiKey+`&query=${name}`)
    .then(response=>{
      // console.log(response)
      if(response.data.error){
        console.log(response.data.error.info);
        setWarning(true);
        setName("");
      } else {
        setWarning(false);
        addCity(name,response.data.current.temperature);
        setName("");
      }
      
    })
    .catch(err => {console.log(err)})
  }
  




  return (
    <div className="add-city-form">
      <input className="input" onChange={handleChange} value={name}/>
      <button className="input" onClick={submitCity}>Add</button>
      <br></br>
      {warning ? <span style={{color:"red"}}>Please, enter a valid city! ({warningCity})</span> : ""}
    </div>
  );
  };

  export default AddCityButton;
