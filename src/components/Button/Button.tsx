import React from "react";
import { Button } from "@mui/material";
import { ButtonOwnProps } from "types/common";

const ButtonComponent: React.FC<ButtonOwnProps> = ({
  text,
  startIcon,
  color,
  variant,
  styles,
}) => {
  return (
    <Button variant={variant} startIcon={startIcon} color={color} sx={styles}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
