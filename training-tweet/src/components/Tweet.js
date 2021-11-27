import React from 'react';
import Author from './Author';
import Avatar from './Avatar';
import Message from './Message';
import Time from './Time';
import { ReplyButton } from './buttons/ReplyButton';
import { RetweetButton } from './buttons/RetweetButton';
import { LikeButton } from './buttons/LikeButton';
import { MoreOptionsButton } from './buttons/MoreOptionsButton';

//Component Parent
export default function Tweet({ tweet }) {

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
