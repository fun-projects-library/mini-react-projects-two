import React, {useContext} from "react";
import MyContext from "../context/MyContext"


const Person = () => {


  const {growOlder, myState} = useContext(MyContext)

  // const context = useContext(MyContext)

  // console.log(context)


  return (
    <div className="person">
      <p>Age: {myState.age}</p>
      <p>Name: {myState.name}</p>
      <button onClick={growOlder}>🍰🍥🎂</button>
    </div>
  );
};

export default Person;
