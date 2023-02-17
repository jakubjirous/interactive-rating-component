import { pxToRem } from "@/utils/unitConvertors";

/**
 * https://chakra-ui.com/docs/styled-system/theme#alphas
 */
const shadows = {
  outline: `0 0 ${pxToRem(1)} ${pxToRem(2)} var(--chakra-colors-white)`,
};

export default shadows;
