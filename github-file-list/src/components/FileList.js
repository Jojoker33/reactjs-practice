import React from 'react';
import PropTypes from 'prop-types';
import FileListIem from './FilelistItem';

export default FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {
                files.map((file) => (
                    <FileListIem file={file} key={file.id} />
                ))
            }
        </tbody>
    </table>
);


FileList.propTypes = {
    files: PropTypes.array
};