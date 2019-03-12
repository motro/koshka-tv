import React from 'react';
import {inject, observer} from 'mobx-react';

export const Header = inject('videos')(observer(({videos}) => (
    <header className="header">
        <a href="#" className="logo">KOSHKA-TV &#128049;</a>

        <div className="search-bar">
            <input type="text" value={videos.query}
                   onChange={(e) => videos.query = e.target.value}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter')
                           videos.query = e.target.value;
                   }}/>
        </div>
    </header>
)));