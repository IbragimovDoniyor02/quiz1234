import React from "react";

export const AppInput = (
    { 
        id, 
        labelText, 
        isRequierd, 
        type, 
        name, 
        placeholderText,
        errorText,
        pattern,
        onChange,
        hasErrors,
        value
    }
    ) => {
    return (
<label className={`input-wrapper ${hasErrors && '_error'}`}  htmlFor={id}>
{labelText}
  <input
    required={isRequierd}
    type={type}
    name={name}
    id={id}
    placeholder={placeholderText}
    pattern={pattern}
    onChange={onChange}
    value={value}
  />
  {hasErrors && 
  <span id="error-message">
    {errorText}
  </span>}
</label>
)
}