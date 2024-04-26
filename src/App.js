import { useEffect } from 'react';
import Calender from './components/Calender';
import axios from 'axios';

function App() {

  useEffect(()=> {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`
    );
    console.log(res.data);
    }
    getData();
  })

  return (
    <div className="App">
    <Calender/>  
    </div>
  );
}

export default App;
