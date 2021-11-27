import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './components/Tweet';



const mockTweet = {
    message: 'React is not that bad.',
    gravatar: 'xyz',
    author: {
        handle: '@TwitterHandle',
        name: 'name'

    },
    likes: 0,
    retweets: 0,
    timestamp: (new Date()).toLocaleDateString()
};




ReactDOM.render(<Tweet tweet={mockTweet} />, document.querySelector('#root'));
