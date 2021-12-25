import { TextField } from '@mui/material';
import React from 'react';

function FormsInputs({
  inputValue,
  types,
  showenText,
  displayesId,
  displayes,
  styles,
  names,
  handleChange,
  handleBlur,
  labels,
  err,
  helper,
  cssProp,
}) {
  return (
    <>
      <TextField
        className={styles}
        fullWidth
        id={displayesId}
        type={types}
        variant={displayes}
        name={names}
        label={labels}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        error={err}
        placeholder={showenText}
        helperText={helper}
        style={cssProp}
      />
    </>
  );
}

export default FormsInputs;
