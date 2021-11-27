import React from 'react';
import PropTypes from 'prop-types';

export default function Author({ author }) {
    return (
        <span className="author">
            <span className="name">{author.name}</span>
            <span className="handle">{author.handle}</span>
        </span>
    );
}

// Example of using props requirement and types checking without using typescript
// https://reactjs.org/docs/typechecking-with-proptypes.html
Author.propTypes = {
    Author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};