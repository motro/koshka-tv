import React from 'react';

export const YouTubePlayer = ({videoId}) => (
    <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com`} frameborder="0"/>
);