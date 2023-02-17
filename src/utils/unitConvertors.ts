/**
 * Convert pixels (px) to rems (rem)
 * @param px
 * @param baseFontSize
 */
export const pxToRem = (px: number, baseFontSize: number = 16): string => {
  const rem = px / baseFontSize;
  return `${rem}rem`;
};

/**
 * Convert pixels (px) to ems (em)
 * @param px
 * @param context
 */
export const pxToEm = (px: number, context: number = 16): string => {
  const em = px / context;
  return `${em}em`;
};
