import './index.css';

function Song({ title, no, singer }) {
  return (
    <div className='Song'>
      <div>
        <div className='Song_title'>{title}</div>
        <div className='Song_singer'>{singer}</div>
      </div>
      <div className='Song_no'>{no}</div>
    </div>
  );
}

export default Song;
