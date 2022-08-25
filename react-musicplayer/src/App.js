import React, {useState, useRef} from "react";
//Import Styles
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Songs';
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import data from './data';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setisPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({currentTime: 0,duration: 0,});
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration});
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[ (currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' :'' }`}>
       <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
       <Song currentSong={currentSong}/>
       <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying} 
       currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo} />
       <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong ={setCurrentSong} setSongs={setSongs}/>
       <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
