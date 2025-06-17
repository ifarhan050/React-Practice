import React from "react";
import PropTypes from "prop-types";
function Input({ id, label, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor="email">{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};
export default Input;
