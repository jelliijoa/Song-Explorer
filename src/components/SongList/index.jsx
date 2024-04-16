import Song from '../Song';

function SongList({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        data.map((song) => {
          return <Song key={song.no} {...song} />;
        })
      )}
    </div>
  );
}

export default SongList;
