import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';

function App() {
  const [data, setData] = useState();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  useEffect(() => {
    const favoriteSongsFromStorage = JSON.parse(
      localStorage.getItem('favoriteSongs')
    );
    if (favoriteSongsFromStorage) {
      setFavoriteSongs(favoriteSongsFromStorage);
    }
  }, []);

  const handleFavorite = (song) => {
    const isFavorited = favoriteSongs.some(
      (favoriteSong) => favoriteSong.no === song.no
    );
    if (isFavorited) {
      const updatedFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong.no !== song.no
      );
      setFavoriteSongs(updatedFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  useEffect(() => {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
  }, [favoriteSongs]);

  const handleSearch = () => {
    setShowInitialMessage(false);
  };

  return (
    <div className='App'>
      <SearchBar setSongList={setData} handleSearch={handleSearch} />

      {data ? (
        <SongList data={data} handleFavorite={handleFavorite} />
      ) : (
        <div>노래를 검색해주세요.</div>
      )}
      {favoriteSongs.length > 0 && (
        <div className='favorite-songs'>
          <h2>찜한 노래</h2>
          <SongList data={favoriteSongs} handleFavorite={handleFavorite} />
        </div>
      )}
    </div>
  );
}

export default App;
