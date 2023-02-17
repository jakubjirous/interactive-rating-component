import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    lineHeight: "base",
    letterSpacing: "normal",
  },
  defaultProps: {
    size: "md",
  },
});

export default Text;
