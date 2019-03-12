import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import {VideosList} from "./components/videos_list";
import {YouTubePlayer} from "./components/youtube_player";
import {Navigation} from "./components/navigation";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            criteria: 'cats'
        };
    }

    componentDidMount() {
        this.fetchVideos(this.state.criteria);
    }

    async fetchVideos(criteria) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${criteria}&key=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const videos = json.items;

        this.setState({videos});
    }

    showVideo(video) {
        this.setState({video});
    }

    onSearchSubmit(criteria) {
        this.setState({criteria}, () => {
            this.fetchVideos(this.state.criteria);
        });
    }

    render() {
        const {videos, video, criteria} = this.state;

        return (
            <div className="App">
                <Header criteria={criteria} onSearchSubmit={this.onSearchSubmit.bind(this)} onQueryChange={(e) => this.setState({criteria: e.target.value})} />
                <div className="content">
                    <div className="left-column">
                        <Navigation onClick={(query) => this.onSearchSubmit(query)} />
                    </div>
                    <div className="main-column">
                        <YouTubePlayer video={video}/>
                    </div>
                    <div className="right-column">
                        <VideosList videos={videos} onItemClick={(video) => this.showVideo(video)} />
                    </div>
                </div>
            </div>
        );
    }
}

