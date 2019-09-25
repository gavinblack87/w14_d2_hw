import React from 'react';

const Song = ({song}) =>
    <>
    
    <p>{song.title.label}</p>
    <img src={song['im:image'][2].label} alt="album artwork" />
    <br/>
    <audio controls> 
    <source src={song.link[1].attributes.href} type="audio/mpeg"/>
    </audio>

    </>

export default Song;
