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
    

    if(user.favorites.includes(name)){

      filteredArray = user.favorites.filter(element=> element!== name);
      
      setUser({...user , favorites: filteredArray})

    } else {
      setUser({...user, favorites: [...user.favorites, name]});

    }
  }

  return (
    <UserContext.Provider value={{user, emojiChange}}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;