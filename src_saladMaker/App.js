import React,{useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from "./context/UserContext"

function App() {

  const userObject = {
    name: 'Enes',
    favorites: ['avocado', 'carrot' ]
  }

  const [user, setUser] = useState(userObject);

  let filteredArray;
  
  const emojiChange = (name) => {
    console.log(userObject.favorites);

    if(user.favorites.includes(name)){
      filteredArray = user.favorites.filter(element=> element!== name);
      // console.log(filteredArray);
      setUser({...user , favorites: filteredArray})
    } else {
      //userObject.favorites.push(name);
      console.log("eeeeee");
      setUser({...user, favorites: [...user.favorites, name]})
    }
    
    console.log(userObject.favorites);
    // user.favorites = filteredArray
    
  }

  return (
    <UserContext.Provider value={{user, emojiChange}}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;