import { useState, useEffect } from 'react';
import './App.css';
import Addkeeper from './components/addkeeper/Addkeeper';
import Header from './components/header/Header';
import Showkeeper from './components/showkeeper/Showkeeper';
import axios from "axios"

function App() {

  const [keeperList, setKeeperList ] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/api/getAll")
    .then(res => setKeeperList(res.data))
  }, [])
  
  return (
    <div className="App">
      <Header/>
      <Addkeeper keeperList={keeperList} setKeeperList={setKeeperList}/>
      <Showkeeper keeperList={keeperList} setKeeperList={setKeeperList}  />
    </div>
  );
}

export default App;
