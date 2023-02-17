const Rating = {
  baseStyle: {
    bg: "grey.500",
    borderRadius: "full",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    pt: 0.5,
  },
  sizes: {
    sm: {
      h: "10",
      w: "10",
    },
    md: {
      h: "14",
      w: "14",
    },
  },
  variants: {
    readonly: {},
    active: {
      transitionProperty: "common",
      transitionDuration: "slower",

      _hover: {
        bg: "grey.300",
        color: "white",
      },

      "&.active": {
        bg: "orange.100",
        color: "white",
      },

      _focus: {
        outline: "white",
        boxShadow: "outline",
      },
    },
  },
  defaultProps: {
    size: "sm",
    variant: "active",
  },
};

export default Rating;
