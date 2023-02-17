import { pxToRem } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#border-radius
 */
const radii = {
  none: `${pxToRem(0)}`,
  base: `${pxToRem(16)}`,
  sm: `${pxToRem(2)}`,
  md: `${pxToRem(6)}`,
  lg: `${pxToRem(8)}`,
  xl: `${pxToRem(12)}`,
  "2xl": `${pxToRem(16)}`,
  "3xl": `${pxToRem(24)}`,
  "4xl": `${pxToRem(36)}`,
  full: `${pxToRem(9999)}`,
};

export default radii;
