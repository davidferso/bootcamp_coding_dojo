import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [responseData, setResponseData] = useState([]);


  const llamarPokemones = async () => {
    try {
      const responseData = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      setResponseData(responseData.data.results)
    }
    catch (error) {
      console.log(error);

    }
  }

  return (
    <div className='App'>
      <button onClick={llamarPokemones}>Fetch Pokemon</button>
      {
        responseData.map(pokemon => (
          <ul>
            <li key={pokemon.name}>{pokemon.name}</li>
          </ul>
        ))}


    </div>
  )
}

export default App;