import React from 'react';
import ReactDOM from 'react-dom';
import Author from './components/Author';
import Avatar from './components/Avatar';
import Message from './components/Message';
import Time from './components/Time';
import { ReplyButton } from './components/buttons/ReplyButton';
import { RetweetButton } from './components/buttons/RetweetButton';
import { LikeButton } from './components/buttons/LikeButton';
import { MoreOptionsButton } from './components/buttons/MoreOptionsButton';
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
