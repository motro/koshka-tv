import {observable, action} from 'mobx';

class Videos {
    @observable videos = [];
    @observable currentVideo;
    @observable query = 'cats';

    @action.bound
    async fetch() {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.query}&key=${process.env.REACT_APP_ACCESS_KEY}`;
        const response = await fetch(url);
        const json = await response.json();

        this.videos = json.items;
    }
}

export const videos = new Videos();