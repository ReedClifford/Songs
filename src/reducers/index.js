import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Glimpse of Us",
      singer: "Joji",
      duration: "2:45",
    },
    {
      title: "Sweetest Pie",
      singer: "Dua Lipa",
      duration: "1:55",
    },
    {
      title: "21 Reasons",
      singer: "Nathan Dawe",
      duration: "3:55",
    },
    {
      title: "Hold Me Closer",
      singer: "Britney Spears",
      duration: "2:25",
    },
  ];
};

const selectedSongReducers = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducers,
});
