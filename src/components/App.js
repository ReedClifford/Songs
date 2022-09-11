import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="container mx-auto flex justify-evenly content-center gap-5">
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;
