import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
    const songNodes = props.songs.map((song, index) => {
        return (
        <li key={index}>
        <Song value={index} song={song}></Song>
        </li>
        )
    })


 return ( 
     <>
     <h1>Song List</h1>
     <ol>
     {songNodes}
     </ol>
     </>
 )
}

export default SongList;