import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/header";

export class App extends Component {

    componentDidMount() {
        this.fetchVideos('cats');
    }

    async fetchVideos(criteria) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${criteria}&key=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(url);
        const json = await response.json();
        const {items} = json;

        console.log(items);
    }

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

