import React from 'react';

export const VideosList = ({videos}) => (
    <div>{videos.map(video => <VideosListItem key={video.id.videoId} video={video} />)}</div>
);

export const VideosListItem = ({video}) => (
    <div>{video.snippet.title}</div>
);