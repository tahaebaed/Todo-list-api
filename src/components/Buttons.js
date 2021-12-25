import { Button } from '@mui/material';
import React from 'react';

const Buttons = ({
  edit,
  shape,
  label,
  clicked,
  howBig,
  TSubmit,
  colors,
  styles,
  cursor,
  disableState,
}) => {
  return (
    <Button
      className={`${styles} pointer`}
      sx={edit}
      size={howBig}
      color={colors}
      variant={shape}
      onClick={clicked}
      type={TSubmit}
      disbaled={disableState}
    >
      {label}
    </Button>
  );
};

export default Buttons;
