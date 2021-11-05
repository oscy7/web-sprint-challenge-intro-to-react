import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'


const App = () => {
  const [StarWarsdata, setStarWars] = useState([]);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setStarWars(res.data)
      console.log(StarWarsdata)
    })
    .catch(err =>{
      console.error(err)
    })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {StarWarsdata.map((character) => {
        return(
          <Character {...character} key={character.height}/>
        );
      })};
    </div>
  );
}

export default App;
