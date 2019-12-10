import React from "react";


const SelectInput = ({
  input,
  placeholder,
  width,
  meta: { touched, error },
  options,
  multiple
}) => {
  return (
    <div>
      <select
        placeholder={placeholder}
        {...input}
        multiple={multiple}
        className="form-control"
      >
        {options &&
          options.map(opt => (
            <option key={opt.key} value={opt.value}>
              {opt.value}
            </option>
          ))}
      </select>
      {touched && error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default SelectInput;
