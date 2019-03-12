import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import {VideosList} from "./components/videos_list";
import {YouTubePlayer} from "./components/youtube_player";
import {Navigation} from "./components/navigation";
import {videos} from "./stores/videos";
import {observer} from 'mobx-react';

@observer
class AppLayout extends Component {
    componentDidMount() {
        videos.fetch();
    }

    onSearchSubmit(criteria) {
        videos.query = criteria;
        videos.fetch();
    }

    render() {

        return (
            <div className="App">
                <Header criteria={videos.query} onSearchSubmit={this.onSearchSubmit.bind(this)} onQueryChange={(e) => videos.query = e.target.value} />
                <div className="content">
                    <div className="left-column">
                        <Navigation onClick={(query) => this.onSearchSubmit(query)} />
                    </div>
                    <div className="main-column">
                        <YouTubePlayer video={videos.currentVideo}/>
                    </div>
                    <div className="right-column">
                        <VideosList videos={videos.videos} onItemClick={(video) => videos.currentVideo = video} />
                    </div>
                </div>
            </div>
        );
    }
}

export const App = AppLayout;