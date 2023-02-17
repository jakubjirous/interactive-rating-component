const Button = {
  baseStyle: {
    fontSize: "lg",
    fontWeight: "bold",
    lineHeight: "normal",
    letterSpacing: "widest",
    textTransform: "uppercase",
    borderRadius: "full",
    transitionProperty: "common",
    transitionDuration: "slower",
    pt: 0.5,
  },
  variants: {
    custom: {
      bg: "orange.100",
      color: "white",
      h: "12",
      w: "100%",

      _hover: {
        bg: "white",
        color: "orange.100",
      },

      _active: {
        bg: "white",
        color: "orange.100",
      },

      _focus: {
        outline: "white",
        boxShadow: "outline",
      },

      _disabled: {
        bg: "grey.500",
        color: "grey.100",
        cursor: "not-allowed",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "custom",
  },
};

export default Button;
