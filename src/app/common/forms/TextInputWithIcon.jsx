import React from "react";

const TextInputWithIcon = ({
  input,
  type,
  placeholder,
  width,
  meta: { touched, error },
  icon,
  pattern,
  readOnly
}) => {
  return (
    <div>
      <div className="input-group mb-3" width={width}>
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} />
          </span>
        </div>
        <input
          {...input}
          type={type}
          readOnly={readOnly}
          pattern={pattern}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
      {touched && error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default TextInputWithIcon;
