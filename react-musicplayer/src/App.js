import React, {useState} from "react";
//Import Styles
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Songs';
import Library from "./components/Library";
//Import Util
import data from './util';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="App">
       <Song currentSong={currentSong}/>
       <Player isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}/>
       <Library songs={songs}/>
    </div>
  );
}

export default App;
