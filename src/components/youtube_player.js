import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';

export const YouTubePlayer = inject('videos')(observer(({videos}) => (
    <div className="video-player-container">
        {videos.currentVideo ? <YouTubeEmbed video={videos.currentVideo} /> : 'Select a video to begin'}
    </div>
)));

export const YouTubeEmbed = ({video}) => (
    <Fragment>
        <div className="video-player">
            <iframe id="ytplayer" type="text/html" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0&origin=http://example.com`} frameBorder="0"/>
        </div>
        <div className="video-player-description">
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    </Fragment>
);