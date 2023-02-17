import { pxToRem } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#typography
 */
const fontSizes = {
  xs: `${pxToRem(10)}`,
  sm: `${pxToRem(12)}`,
  md: `${pxToRem(15)}`,
  lg: `${pxToRem(18)}`,
  xl: `${pxToRem(20)}`,
  "2xl": `${pxToRem(24)}`,
  "3xl": `${pxToRem(30)}`,
  "4xl": `${pxToRem(36)}`,
  "5xl": `${pxToRem(48)}`,
  "6xl": `${pxToRem(60)}`,
  "7xl": `${pxToRem(72)}`,
  "8xl": `${pxToRem(96)}`,
  "9xl": `${pxToRem(128)}`,
};

export default fontSizes;
