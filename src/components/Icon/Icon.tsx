import React from "react";
import { Box } from "@mui/material";
import { IconOwnProps } from "types/common";

const Icon: React.FC<IconOwnProps> = ({ src, alt, styles }) => {
  return <Box component="img" alt={alt} src={src} sx={styles} />;
};

export default Icon;
