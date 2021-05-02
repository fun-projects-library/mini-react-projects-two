import React,{ createContext, useState} from 'react'

const MyContext = createContext()

export default MyContext;





export function MyProvider(props) {


    const [myState, setMyState] = useState({name: "John", age: 33});

    const growOlder = () => {
        setMyState({...myState, age: myState.age+1})
    }

    
    console.log(myState)
    return (
        <MyContext.Provider value={{myState, growOlder}}>
            <button onClick={growOlder}>try</button>
            {props.children}
        </MyContext.Provider>
    )
}

