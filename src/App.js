import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import {VideosList} from "./components/videos_list";
import {YouTubePlayer} from "./components/youtube_player";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
    }

    componentDidMount() {
        this.fetchVideos('cats');
    }

    async fetchVideos(criteria) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${criteria}&key=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const videos = json.items;

        this.setState({videos});
    }

    showVideo(videoId) {
        this.setState({videoId});
    }

    render() {
        const {videos, videoId} = this.state;

        return (
            <div className="App">
                <Header />
                <div className="content">
                    <div className="left-column">
                    </div>
                    <div className="main-column">
                        {videoId && <YouTubePlayer videoId={videoId}/>}
                    </div>
                    <div className="right-column">
                        <VideosList videos={videos} onItemClick={(videoId) => this.showVideo(videoId)} />
                    </div>
                </div>
            </div>
        );
    }
}

