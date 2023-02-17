/**
 * https://chakra-ui.com/docs/styled-system/advanced-theming#single-part-component
 */
const Section = {
  baseStyle: {
    bgGradient: "linear(to-b, blue.700, blue.900)",
    borderRadius: "4xl",
    w: "100vw",
  },
  sizes: {
    sm: {
      p: 7,
      maxW: "xs",
    },
    md: {
      p: 9,
      maxW: "md",
    },
  },
  defaultProps: {
    size: "sm",
  },
};

export default Section;
