import React from 'react';

export const Header = ({criteria, onSearchSubmit}) => (
    <header className="header">
        <a href="#" className="logo">KOSHKA-TV &#128049;</a>

        <div className="search-bar">
            <input type="text" defaultValue={criteria} onKeyPress={(e) => {
                if (e.key === 'Enter')
                    onSearchSubmit(e.target.value);
            }}/>
        </div>
    </header>
);