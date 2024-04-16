import axios from 'axios';
import { useRef } from 'react';
import './index.css';

function SearchBar({ setSongList }) {
  const inputRef = useRef();

  const handleSearch = () => {
    axios
      .get(`https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`)
      .then((res) => {
        setSongList(res.data);
      });
  };

  return (
    <div className='SearchBar'>
      <input type='text' className='SearchBar_input' ref={inputRef} />
      <button className='SearchBar_button' onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}

export default SearchBar;
