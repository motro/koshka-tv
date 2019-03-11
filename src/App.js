import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import {VideosList} from "./components/videos_list";

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

    render() {
        return (
            <div className="App">
                <Header />
                <div className="content">
                    <div className="left-column">
                    </div>
                    <div className="main-column">
                    </div>
                    <div className="right-column">
                        <VideosList videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

