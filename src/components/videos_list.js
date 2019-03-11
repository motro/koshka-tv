import React from 'react';

export const VideosList = ({videos, onItemClick}) => (
    <div className="videos-list">
        {videos.map(video => <VideosListItem key={video.id.videoId} video={video} onClick={onItemClick} />)}
    </div>
);

export const VideosListItem = ({video, onClick}) => (
    <div className="video-thumb-item" onClick={() => onClick(video.id.videoId)}>
        <img src={video.snippet.thumbnails.default.url} className="video-thumb" />
        <div className="video-thumb-title">{video.snippet.title}</div>
    </div>
);