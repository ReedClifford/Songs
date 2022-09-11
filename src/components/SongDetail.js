import { connect } from "react-redux";
const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div className="p-20 border-2 my-auto w-4/12 shadow-md shadow-greeb-600 border-green-500 rounded-lg text-center">
        <h1 className="font-bold text-green-500 text-6xl">Select A Song</h1>
      </div>
    );
  }
  return (
    <div className=" my-auto shadow-lg rounded-lg bg-slate-900  p-20 text-center flex flex-col justify-center gap-3 w-4/12">
      <h1 className="text-5xl font-bold text-green-500">
        {selectedSong.title}
      </h1>
      <h2 className="text-lg font-medium text-slate-50">
        by:{selectedSong.singer}
      </h2>
      <p className="text-md font-normal text-slate-300">
        Duration: {selectedSong.duration} mins
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};
export default connect(mapStateToProps)(SongDetail);
