import React from 'react';

export const YouTubePlayer = ({video}) => (
    <div className="video-player-container">
        <div className="video-player">
            <iframe id="ytplayer" type="text/html" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0&origin=http://example.com`} frameBorder="0"/>
        </div>
        <div className="video-player-description">
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    </div>
);