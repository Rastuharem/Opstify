import React, { useState } from "react";
import "../styles/MainPage.css";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import songs from "../data/songs.json";
import SongDetail from "../components/SongDetail";

for (let index = 0; index < songs.length; index++) {
  const song = songs[index];
  song.id = index;
}

const MainPage = () => {
  const [Playlist, setPlaylist] = useState([...songs]);

  const changePlaylistCauseFilter = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };

  return (
    <>
      <NavBar />
      <SongDetail />
      <SongList songs={songs} changePlaylist={changePlaylistCauseFilter} />
      <Player />
      <a href="#focused" id="focus-link" hidden>
        Go to playing element
      </a>
    </>
  );
};

export default MainPage;