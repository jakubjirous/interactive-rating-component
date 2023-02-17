import { pxToRem } from "@/utils/unitConvertors";
import { theme } from "@chakra-ui/react";

/**
 * https://chakra-ui.com/docs/styled-system/theme#sizes
 */
const sizes = {
  sizes: {
    ...theme.space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": `${pxToRem(224)}`,
    "2xs": `${pxToRem(256)}`,
    xs: `${pxToRem(320)}`,
    sm: `${pxToRem(384)}`,
    md: `${pxToRem(448)}`,
    lg: `${pxToRem(512)}`,
    xl: `${pxToRem(576)}`,
    "2xl": `${pxToRem(372)}`,
    "3xl": `${pxToRem(768)}`,
    "4xl": `${pxToRem(896)}`,
    "5xl": `${pxToRem(1024)}`,
    "6xl": `${pxToRem(1152)}`,
    "7xl": `${pxToRem(1280)}`,
    "8xl": `${pxToRem(1440)}`,
  },
};

export default sizes;
