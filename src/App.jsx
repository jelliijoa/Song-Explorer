import './App.css';
import SongList from './components/SongList';

const data = [
  {
    brand: 'tj',
    no: '79414',
    title: 'It`s The Most Wonderful Time Of The Year',
    singer: 'Andy Williams',
    composer: 'POLA EDWARD,WYLE GEORGE',
    lyricist: 'POLA EDWARD,WYLE GEORGE',
    release: '2024-01-31',
  },
  {
    brand: 'tj',
    no: '22161',
    title: 'Life Is Wonderful',
    singer: 'Jason Mraz',
    composer: 'MRAZ JASON THOMAS',
    lyricist: 'MRAZ JASON THOMAS',
    release: '2010-12-01',
  },
  {
    brand: 'tj',
    no: '20547',
    title: 'Love is wonderful thing',
    singer: 'Michael Bolton',
    composer: 'Michael Bolton, Andy Goldmark',
    lyricist: 'Michael Bolton, Andy Goldmark',
    release: '0000-00-00',
  },
];

function App() {
  return (
    <>
      <SongList data={data} />
    </>
  );
}

export default App;
