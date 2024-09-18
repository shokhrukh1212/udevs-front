import React from "react";
import { Box } from "@mui/material";
import { IconOwnProps } from "types/common";

const Icon: React.FC<IconOwnProps> = ({ src, alt }) => {
  return (
    <Box component="img" alt={alt} src={src} sx={{ p: 2, cursor: "pointer" }} />
  );
};

export default Icon;
