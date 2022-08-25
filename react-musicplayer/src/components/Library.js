import React from "react";
import LibraySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibraySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} song={song} setCurrentSong={setCurrentSong} songs={songs} id={song.id} key={song.id}/>
                ))}
            </div>
        </div>

    )
}

export default Library;