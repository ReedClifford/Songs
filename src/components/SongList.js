import { connect } from "react-redux";
import { selectSong } from "../actions";
const SongList = ({ songs, selectSong }) => {
  const renderedList = songs.map((song) => {
    return (
      <div
        className="container flex justify-between w-full content-center p-10 shadow-lg rounded-xl gap-20"
        key={song.title}
      >
        <h1 className="font-bold text-2xl te text-slate-900">{song.title}</h1>
        <button
          className="p-4 font-bold bg-slate-900 rounded-lg text-slate-200 hover:bg-zinc-700"
          onClick={() => selectSong(song)}
        >
          Select
        </button>
      </div>
    );
  });
  return <div className="flex flex-col  gap-10 mt-10">{renderedList}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
