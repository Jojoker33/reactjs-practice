import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';

export default function FileListIem({ file }) {

    return (<tr className="file-list-item">
        <FileName file={file} />
    </tr>);

};

FileListIem.propTypes = {
    file: PropTypes.object.isRequired
};