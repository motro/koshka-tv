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

    onSearchSubmit(criteria) {
        videos.query = criteria;
        videos.fetch();
    }

    render() {
        return (
            <Provider videos={videos}>
                <div className="App">
                    <Header criteria={videos.query} onSearchSubmit={this.onSearchSubmit.bind(this)} />
                    <div className="content">
                        <div className="left-column">
                            <Navigation onClick={(query) => this.onSearchSubmit(query)} />
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