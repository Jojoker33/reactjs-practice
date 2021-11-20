import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component Parent
function Tweet() {
    return (
        <div className='tweet'>
            <Avatar />
            <div className="content">
                <Author />
                <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>

        </div>
    );
}

function Author() {
    return (
        <span className="author">
            <span className="name">SaNd</span>
            <span className="handle">@jojoker33</span>
        </span>
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

function Message() {
    return (
        <div className="message">React is not that bad.</div>
    );
}

function Time() {
    return (
        <span className="time">3h ago</span>
    );
}


//Buttons
// with anonymous function
const ReplyButton = () => (<i className="fa fa-reply reply-button" />);
const RetweetButton = () => (<i className="fa fa-retweet retweet-button" />);
const LikeButton = () => (<i className="fa fa-heart like-button" />);
const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button" />);


ReactDOM.render(<Tweet />, document.querySelector('#root'));