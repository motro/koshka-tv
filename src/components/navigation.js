import React from 'react';

export const Navigation = ({onClick}) => (
    <nav className="navigation">
        <a onClick={() => onClick('Cats')} href="#">Cats</a>
        <a onClick={() => onClick('Dogs')}  href="#">Dogs</a>
        <a onClick={() => onClick('Parrots')}  href="#">Parrots</a>
    </nav>
);