import axios from 'axios';
import { useRef } from 'react';
import './index.css';

function SearchBar({ setSongList, setShowInitialMessage }) {
  const inputRef = useRef();

  const handleSearch = () => {
    axios
      .get(`https://api.manana.kr/karaoke/song/${inputRef.current.value}.json`)
      .then((res) => {
        if (res.data.length === 0) {
          setSongList([]);
        } else {
          setSongList(res.data);
          setShowInitialMessage(false); // 검색 결과가 있을 때 메시지를 숨김
        }
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='SearchBar'>
      <input
        type='text'
        className='SearchBar_input'
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button className='SearchBar_button' onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}

export default SearchBar;
