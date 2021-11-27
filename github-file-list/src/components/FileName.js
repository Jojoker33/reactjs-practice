import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon';

export default function FileName({ file }) {

    return (
        <>
            <FileIcon file={file} />
            <td className="file-name">{file.name}</td>
        </>

    );
}

FileName.propTypes = {
    name: PropTypes.string
};