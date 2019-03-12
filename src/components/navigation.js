import React from 'react';
import {inject} from 'mobx-react';

export const Navigation = inject('videos')(({videos}) => (
    <nav className="navigation">
        <a onClick={() => videos.query = 'Cats'} href="#">Cats</a>
        <a onClick={() => videos.query = 'Dogs'}  href="#">Dogs</a>
        <a onClick={() => videos.query = 'Parrots'}  href="#">Parrots</a>
    </nav>
));