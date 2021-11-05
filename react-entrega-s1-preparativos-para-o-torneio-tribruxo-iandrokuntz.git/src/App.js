import Witchers from './components/Witchers';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [witcher, setWicher] = useState([])

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setWicher(response))
      .catch((err) => console.log(err))
  }, [])

  return (

    <div className="App">
      <h1>Triwizard tournament</h1>
    <Witchers witcher={witcher} setWicher={setWicher}/>

    </div>

  )
}

export default App;
