import React from 'react';


export default function Author({ name, handle }) {
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    );
}