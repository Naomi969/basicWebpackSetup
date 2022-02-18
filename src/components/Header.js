import React from 'react';

export function Header() {
    return(
        <div>
            <h1> Welcome { new Date().toDateString() }</h1>
        </div>
    )
}