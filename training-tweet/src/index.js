import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component Parent
function Tweet() {
    return (
        <div className='tweet'>
            <Avatar />
        </div>
    );
}

function Avatar() {
    return (
        <img
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
        />

    );
}







ReactDOM.render(<Tweet />, document.querySelector('#root'));