import React from 'react';
import PropTypes from 'prop-types';

export const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 && <span className='like-count'>{count}</span>}
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
};