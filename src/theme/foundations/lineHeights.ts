import { pxToRem } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#typography
 */
const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
  "3": `${pxToRem(12)}`,
  "4": `${pxToRem(16)}`,
  "5": `${pxToRem(20)}`,
  "6": `${pxToRem(24)}`,
  "7": `${pxToRem(28)}`,
  "8": `${pxToRem(32)}`,
  "9": `${pxToRem(36)}`,
  "10": `${pxToRem(40)}`,
};

export default lineHeights;
