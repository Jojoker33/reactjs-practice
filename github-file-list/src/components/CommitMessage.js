import React from "react";
import PropTypes from "prop-types";

export default function CommitMessage({ commit }) {
  return <td className="commit-message">{commit.message}</td>;
}

CommitMessage.propTypes = {
  commit: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
