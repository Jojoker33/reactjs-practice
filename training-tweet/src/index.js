import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component Parent
function Tweet({ tweet }) {

    return (
        <div className='tweet'>
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author name={tweet.author.name} handle={tweet.author.handle} />
                <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>

        </div>
    );
}

function Author({ name, handle }) {
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar"
        />

    );
}

function Message({ text }) {
    return (
        <div className="message">{text}</div>
    );
}

function Time({ time }) {
    return (
        <span className="time">{time}</span>
    );
}


//Buttons
// with anonymous function
const ReplyButton = () => (<i className="fa fa-reply reply-button" />);


function getRetweetCount(count) {
    if (count <= 0) {
        return null;
    }
    return <span className='retweet-count'>{count}</span>;
}

const RetweetButton = ({ count }) => {
    return (<span className="retweet-button">
        <i className="fa fa-retweet " />
        {getRetweetCount(count)}
    </span>
    );
};

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 && <span className='like-count'>{count}</span>}
    </span>
);




const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button" />);
const mockTweet = {
    message: 'React is not that bad.',
    gravatar: 'xyz',
    author: {
        handle: '@jojoker33',
        name: 'SaNd'

    },
    likes: 0,
    retweets: 0,
    timestamp: (new Date()).toLocaleDateString()
};




ReactDOM.render(<Tweet tweet={mockTweet} />, document.querySelector('#root'));
