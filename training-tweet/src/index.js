import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './components/Tweet';



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
