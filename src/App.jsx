import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <div className='App'>
        <SearchBar setSongList={setData} />
        <SongList data={data} />
      </div>
    </>
  );
}

export default App;
