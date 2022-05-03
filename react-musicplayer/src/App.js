import React, {useState} from "react";
//Import Styles
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Songs';
//Import Util
import data from './util';

function App() {
  //State
  const [song, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[4]);
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="App">
       <Song currentSong={currentSong}/>
       <Player isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
