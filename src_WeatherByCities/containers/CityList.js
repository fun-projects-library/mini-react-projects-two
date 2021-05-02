import React, {useContext} from "react";
import WeatherContext from "../context/WeatherContext"



const CityList = () => {

  const {cities, cancelCity} = useContext(WeatherContext)
  
  
  const deleteRow = (e) => {
    
    cancelCity(e.target.id)
    
    // e.target.parentElement.parentElement.remove();
    
  }

  cities.map((item,ref)=>{
    return item.ref = ref;
  })

  

    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((item,index)=>{
            return (
              <tr key={index} id={item.ref}>
                <td>{item.name}</td>
                <td>{item.temperature}</td>
                <td><button className="input" id={item.name} onClick={deleteRow} style={{backgroundColor:"gray", fontSize: "11px"}}>Delete</button></td>
                
              </tr>
            )
          })}
            
        </tbody>
      </table>
    );
  };

  export default CityList;
