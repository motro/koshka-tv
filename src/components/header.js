import React from 'react';
import {inject} from 'mobx-react';

export const Header = inject('videos')(({criteria, onSearchSubmit, videos}) => (
    <header className="header">
        <a href="#" className="logo">KOSHKA-TV &#128049;</a>

        <div className="search-bar">
            <input type="text" value={criteria}
                   onChange={(e) => videos.query = e.target.value}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter')
                           onSearchSubmit(e.target.value);
                   }}/>
        </div>
    </header>
));