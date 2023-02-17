import { pxToEm } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#breakpoints
 */
const breakpoints = {
  sm: `${pxToEm(375)}`,
  md: `${pxToEm(1440)}`,
};

export default breakpoints;
