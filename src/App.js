import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";
import {VideosList} from "./components/videos_list";
import {YouTubePlayer} from "./components/youtube_player";
import {Navigation} from "./components/navigation";
import {videos} from "./stores/videos";
import {observer, Provider} from 'mobx-react';

@observer
class AppLayout extends Component {

    componentDidMount() {
        videos.fetch();
    }

    render() {
        return (
            <Provider videos={videos}>
                <div className="App">
                    <Header />
                    <div className="content">
                        <div className="left-column">
                            <Navigation />
                        </div>
                        <div className="main-column">
                            <YouTubePlayer />
                        </div>
                        <div className="right-column">
                            <VideosList />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export const App = AppLayout;