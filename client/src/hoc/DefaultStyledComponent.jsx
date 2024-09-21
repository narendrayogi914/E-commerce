import React from "react";
import { Box } from "@chakra-ui/react";

const DefaultStyledComponent = ({ children, ...props }) => {
  return (
    <Box margin={50} padding={50} marginX={100} {...props}>
      {children}
    </Box>
  );
};

export default DefaultStyledComponent;
