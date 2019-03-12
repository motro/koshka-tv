import React from 'react';
import {observer, inject} from 'mobx-react';

export const VideosList = inject('videos')(observer(({videos}) => (
    <div className="videos-list">
        {videos.videos.map(video => <VideosListItem key={video.id.videoId}
                                                    video={video}
                                                    onClick={(video) => videos.currentVideo = video} />)}
    </div>
)));

export const VideosListItem = ({video, onClick}) => (
    <div className="video-thumb-item" onClick={() => onClick(video)}>
        <img src={video.snippet.thumbnails.default.url} className="video-thumb" />
        <div className="video-thumb-title">{video.snippet.title}</div>
    </div>
);