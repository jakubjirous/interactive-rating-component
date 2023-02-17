import { Overpass } from "@next/font/google";

export const nextFont = Overpass({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

/**
 * https://chakra-ui.com/docs/styled-system/theme#typography
 */
const fonts = {
  body: nextFont.style.fontFamily,
  heading: nextFont.style.fontFamily,
};

export default fonts;
