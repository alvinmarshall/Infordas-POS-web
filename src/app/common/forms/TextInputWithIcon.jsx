import React from "react";

const TextInputWithIcon = ({
  input,
  type,
  placeholder,
  width,
  meta: { touched, error },
  icon,
  pattern,
  className,
  readOnly
}) => {
  return (
    <div style={{ width: `${width}%` }}>
      <div className="input-group mb-3">
        {icon && (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={icon} />
            </span>
          </div>
        )}
        <input
          {...input}
          type={type}
          readOnly={readOnly}
          pattern={pattern}
          className={`form-control ${className}`}
          placeholder={placeholder}
        />
      </div>
      {touched && error && <p className="text-danger">{error}</p>}
    </div>
  );
};

TextInputWithIcon.defaultProps = {
  width: 100,
  type: "text"
};
export default TextInputWithIcon;
